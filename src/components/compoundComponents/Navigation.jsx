import React from "react";
import { Grid, TypedContent, Button } from "../declarativeComponents";
import styled from "styled-components";
import { RenderSVG } from "../declarativeComponents/RenderSVG";
import { Media4KUp, MediaMedium, MediaSmall } from "../helpers/mediaQueries";

const DROPSHADOW_HEADER = styled.header`
	width: 100%;
	position: fixed;
  	padding-top: 1rem;
  	padding-bottom: 1rem;
  	background: ${({ theme }) => theme.background};
  	box-shadow: 0px 4px 7px rgba(215, 132, 38, 0.2);
`;


export function Navigation() {
	return (
		<DROPSHADOW_HEADER>
			<Grid
				type="flex"
				stringstyle={`
            	align-items: center;
            	justify-content: space-between;
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
						font-weight: 500;
						font-size: 2.6rem;
                        border-radius: 0.4rem;
						padding: 0 1rem;
						transition: background-color 400ms ease;
						${Media4KUp} {
							font-size: 3rem;
						}
						${MediaMedium} {
							font-size: 2.2rem;
						}
						${MediaSmall} {
							font-size: 1.8rem;
							max-width: 52rem;
						}
						&:focus {
                            outline: none;
                            background-color: rgba(250,250,250,0.3);
							transition: background-color 200ms ease;
						}
						&:hover {
                            background-color: rgba(250,250,250,0.15);
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
					stringstyle='& > * {padding: 0.8rem 2.4rem 0.6rem}'
				>
					<Button href="/login/" type="outlined">
						Login
          			</Button>
					<Button href="/sign-up/" type="filled">
						Sign Up
          			</Button>
				</Grid>
			</Grid>
		</DROPSHADOW_HEADER>
	);
}
