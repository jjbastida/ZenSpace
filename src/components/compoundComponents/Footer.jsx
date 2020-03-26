import React from 'react';
import styled from 'styled-components';
import { Grid, TypedContent } from '../declarativeComponents';
import { Media4KUp, MediaMedium, MediaSmall } from '../helpers/mediaQueries';
import { RenderSVG } from '../declarativeComponents/RenderSVG';
import { Link } from '../declarativeComponents/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/pro-solid-svg-icons';

const DARK_FOOTER = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.textPrimary};
`;

const links = [
    {
        slug: '/login/',
        text: 'Login'
    },
    {
        slug: '/sign-up/',
        text: 'Sign Up'
    },
    {
        slug: '/about/',
        text: 'About'
    },
];

export function Footer() {
    return (
        <DARK_FOOTER>
            <Grid
                childrenSize='2'
                stringstyle={`
                align-items: center;
                `}
            >
                <TypedContent
                    type="h4"
                    as='a'
                    aria-label='Go to Homepage'
                    href='/'
                    title='Homepage'
                    stringstyle={`
						text-decoration: none;
						font-weight: 400;
                        font-size: 2rem;
                        padding: 0 1rem;
                        border-radius: 0.4rem;
                        color: #CCCCDD;
						${Media4KUp} {
							font-size: 2.6rem;
						}
						${MediaMedium} {
							font-size: 1.8rem;
						}
						${MediaSmall} {
							font-size: 1.6rem;
                            max-width: none;
                            padding: 0.4rem 0;
                            width: auto;
                            grid-column: auto !important;
							& > span {
								display: none !important;
						}
							& > svg {
                                margin-right: 0;
                                display: block;
                                margin: auto;
						}
						}
						&:focus {
                            outline: none;
                            background-color: rgba(250,250,250,0.1);
						}
						&:hover {
                            background-color: rgba(250,250,250,0.05);
						}
					`}
                >
                    <RenderSVG
                        src='/images/MainLogo.svg'
                        stringstyle={`
							margin-right: 1rem;
                            transform: translateY(-.2rem);
                            color: #CCCCDD;
						`}
                    />
                    <span>
                        ZenDen
					</span>
                </TypedContent>
                <Grid
                    type='flex'
                    naked
                    stringstyle={`
                        grid-column: auto / span 4 !important;
                        align-items: center;
                        justify-content: space-between;
                        margin: 0;
                        ${MediaSmall} {
                            align-items: flex-start;
                            justify-content: flex-start;
                        }
                    `}
                >
                    {links.map(({ text, slug }) => (
                        <Link
                            href={slug}
                            key={text}
                            stringstyle={`
                            color: #CCCCDD;
                            padding: 0 2rem;
                            margin: 0 1rem;
                            ${MediaSmall} {
                                margin: 1rem;
                                width: auto;
                                padding: 0.4rem 1rem !important;
                                &:first-child {
                                    margin-left: 0;
                                }
                            }
                        `}
                        >
                            {text}
                        </Link>
                    ))}
                </Grid>
                <TypedContent
                    type='p2'
                    color='#CCCCDD'
                    stringstyle={`
                    grid-columns: auto;
                    text-align: right;
                    grid-column: 10 / span 3 !important;
                    margin: 0;
                    ${MediaSmall} {
                        text-align: left;
                        grid-column: 1 / span 6 !important;
                    }
                `}
                >
                    Made with <FontAwesomeIcon icon={faHeart} alt='love' />
                    &nbsp;
                    <Link
                        target='_blank'
                        href='https://jjdesign.space'
                        stringstyle={`
                            color: inherit;
                            font: inherit;
                            ${MediaSmall} {
                                padding: 0.6rem 2rem 0.6rem 0;
                            }
                        `}
                    >
                        by JJ Bastida
                    </Link>
                </TypedContent>
            </Grid>
        </DARK_FOOTER>
    )
}
