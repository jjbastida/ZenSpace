import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, TypedContent, Image } from "../components/declarativeComponents";
import { AppContext } from "../contexts/AppContext";
import { activitiesReduced } from "./data/activitiesData";
import { MediaSmall } from "../components/helpers/mediaQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLockAlt } from "@fortawesome/pro-solid-svg-icons";
import styled from "styled-components";

const LinkCard = styled(Link)`
display: block;
background-color: ${(props) => props['data-disabled'] ? '#FAFAFA' : '#FFFFFF'};
opacity: ${(props) => props['data-disabled'] ? '0.5' : '1'};
padding: 3rem 2rem;
border-radius: 1rem;
box-shadow: ${({ theme }) => theme.shadow || 'box-shadow: 0px 4px 7px rgba(226, 222, 226, 0.3)'};
text-decoration: none;
grid-column: 3 / span 8;
margin-bottom: 2rem;
padding: 4rem;
outline: none;
border: ${(props) => props['data-disabled'] ? '1px solid #88889F !important' : '1px solid #2F3B52'};
transition: transform ease 400ms, box-shadow ease 400ms;
cursor: ${(props) => props['data-disabled'] ? 'default' : 'pointer'};
transform: ${(props) => props['data-disabled'] ? 'none !important' : null};
position: relative;
${MediaSmall} {
    padding: 2rem 3rem 4rem;
    & > svg {
        display: none;
    }
}

& > svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
}

& > * {
    color: ${(props) => props['data-disabled'] ? '#88889F !important' : '#2F3B52'};
}

&:focus > svg {
    color: #3F5FA6;
}

& h4{
    position: relative;
    z-index: 1;
}

& h4::after{
    content: ${(props) => props['data-disabled'] ? null : '""'};
    display: block;
    position: absolute;
    height: 100%;
    opacity: 0;
    width: 0;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width ease 400ms, opacity ease 400ms;
    display: inline;
    padding-right: 1rem;
    padding-right: 1rem;
    box-shadow:
    inset 0 -0.14em #FFF,
    inset 0 -0.4em #FFCF99;
}

&:hover h4::after{
    opacity: 1;
    width: 100%;
}

&:focus h4::after{
    opacity: 1;
    width: 100%;
}

&:hover {
    color: #FFFFFF;
    transform: translateY(-6px);
    box-shadow: 0px 4px 7px rgba(226, 222, 226, 0.3);
}

&:focus {
    color: #FFFFFF;
    border-color: #3F5FA6;
    transform: translateY(-10px);
    box-shadow: 0px 4px 7px rgba(226, 222, 226, 0.5);
}

&:active {
    color: #FFFFFF;
    transform: translateY(2px);
    box-shadow: 0px 4px 7px rgba(226, 222, 226, 0);
}
${({ stringstyle }) => (stringstyle || '')}
`

export function Dashboard() {
    const { parseCookie } = useContext(AppContext);
    const { loggedIn } = parseCookie();

    return (
        <Grid
            type='grid'
            stringstyle={`
                padding-top: 8rem;
                padding-bottom: 8rem;
            `}
        >
            <TypedContent
                type='h1'
                stringstyle={`
                    grid-column: 3 / span 8;
                `}
            >
                Organizing Dashboard
            </TypedContent>
            <TypedContent
                type='h4'
                stringstyle={`
                    grid-column: 3 / span 8;
                    margin-bottom: 4rem;
                    ${MediaSmall} {
                        margin-bottom: 2rem;
                    }
                `}
            >
                Select one of the activities below to start...
            </TypedContent>
            {activitiesReduced.map(({ name, description, imagePath, link, logInRequired }) => {
                const disabled = !loggedIn && logInRequired;

                return (
                    <LinkCard
                        to={disabled ? undefined : `/activities/${link}/`}
                        data-disabled={disabled}
                        tabIndex={disabled ? -1 : 0}
                        key={name}
                    >
                        <Grid
                            type='flex'
                            naked
                            stringstyle={`
                        flex-wrap: nowrap;
                        align-items: flex-start;
                        justify-content: flex-start;
                        ${MediaSmall} {
                            flex-direction: column;
                        }
                    `}
                        >
                            <Image
                                src={imagePath}
                                stringstyle={`
                                margin-right: 6rem;
                                max-height: 20rem;
                                object-fit: cover;
                                ${MediaSmall} {
                                    margin-bottom: 2rem
                                }
                        `}
                            />
                            <Grid
                                type='flex'
                                naked
                                stringstyle={`
                            flex-wrap: wrap;
                            align-items: flex-start;
                            justify-content: flex-start;
                            flex-direction: column;
                            & > * {
                                width: 100%
                            }
                        `}
                            >
                                <TypedContent
                                    type='h4'
                                    stringstyle={`
                                font-weight: 600;
                                width: auto;
                                margin-bottom: .4rem;
                            `}
                                >
                                    {name}
                                </TypedContent>
                                <TypedContent type='p' stringstyle='max-width: 50rem'>
                                    {description}
                                </TypedContent>
                            </Grid>
                        </Grid>
                        <FontAwesomeIcon icon={!loggedIn && logInRequired ? faLockAlt : faChevronRight} />
                    </LinkCard>
                )
            })}
        </Grid>
    );
}
