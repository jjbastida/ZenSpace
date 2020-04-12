import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Grid, TypedContent, Button } from "../declarativeComponents";
import styled from "styled-components";
import { RenderSVG } from "../declarativeComponents/RenderSVG";
import { Media4KUp, MediaMedium, MediaSmall } from "../helpers/mediaQueries";
import { pathBlacklist, pathWhitelist } from "../helpers/pathFunctions";
import { AppContext } from "../../contexts/AppContext";

const DROPSHADOW_HEADER = styled.header`
	width: 100%;
	position: fixed;
  	padding-top: 1rem;
	z-index: 40;
  	padding-bottom: 1rem;
  	background: ${({ theme }) => theme.background};
	box-shadow: ${({ noDrop }) => noDrop ? '' : '0px 4px 7px rgba(226, 222, 226, 0.2)'};

	${MediaSmall} {
		box-shadow: 0px 4px 7px rgba(226, 222, 226, 0.2);
	}
`;


export function Navigation() {
	const { currentPath, parseCookie } = useContext(AppContext);
	const { walkthroughStep } = parseCookie();
	const walkingThrough = pathBlacklist(currentPath, ['/getting-started/']);
	const noDrop = pathWhitelist(currentPath, ['/getting-started/', '/tutorial/']);

	return (
		<DROPSHADOW_HEADER noDrop={noDrop}>
			<Grid
				type="flex"
				stringstyle={`
            	align-items: center;
				justify-content: space-between;
				& > * {
					width: auto !important;
				}
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
						font-size: 2.6rem;
                        border-radius: 0.4rem;
						padding: 0 1rem;
						transition: background-color 400ms ease;
						${Media4KUp} {
							font-size: 3rem;
						}
						${MediaMedium} {
							font-size: 2.4rem;
						}
						${MediaSmall} {
							font-size: 2rem;
							max-width: 52rem;
							& > span {
								visibility: visible !important;
								opacity: 1 !important;
								transform: translateX(0) !important;
							}
						}
						&:focus {
                            outline: none;
                            background-color: rgba(47,59,82,0.1);
							transition: background-color 200ms ease;
						}
						&:hover {
                            background-color: rgba(47,59,82,0.05);
						}
						&:hover > span {
							visibility: visible;
							opacity: 1;
							transform: translateX(0);
						}
						&:focus > span {
							visibility: visible;
							opacity: 1;
							transform: translateX(0);
							transition: opacity 100ms ease, visibility 100ms ease, transform 150ms ease;
						}
						& > span {
							visibility: hidden;
							opacity: 0;
							display: inline-block;
							transform: translateX(-30%);
							transition: opacity 200ms ease, visibility 200ms ease, transform 350ms ease;
						}
					`}
				>
					<RenderSVG
						src='/images/MainLogo.svg'
						stringstyle={`
							margin-right: 1rem;
							transform: translateY(-.2rem);
						`}
					/>
					<span>
						ZenDen
					</span>
				</TypedContent>
				<Grid
					type="flex"
					naked={true}
					childSpacing="2rem"
					stringstyle={`
						& > * {
							padding: 1rem 2.4rem;
						}
						${MediaSmall} {
							& > * {
								padding: 0.8rem 2rem;
							}
						}
					`}
				>
					{/* <Button href="/login/" type="outlined">
						Login
          			</Button> */}
					{walkingThrough && walkthroughStep >= 2 ? (
						<Button href="/dashboard/" type="outlined">
							Dashboard
						</Button>
					) : walkingThrough ? (
						<Button href="/getting-started/" type="filled">
							Get Started
						</Button>
					) : null}
				</Grid>
			</Grid>
		</DROPSHADOW_HEADER>
	);
}

Navigation.propTypes = {
	currentPath: PropTypes.string,
};