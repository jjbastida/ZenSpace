import React, { useRef } from "react";
import { TypedContent, Grid, PageHelm, Image, Button } from "../components/declarativeComponents";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { scrollInto } from "../components/helpers/scrollIntoView";
import { useEffect } from "react";
import { GRID } from "../components/declarativeComponents/Grid";

export function Home({ pageData }) {
	const secondSection = useRef();
	const theme = useContext(ThemeContext);

	return (<>
		<PageHelm pageData={pageData} />
		<Grid
			stringStyle={`
			padding-top: 14rem;
			padding-bottom: 12rem;
			`}
			type='grid'
		>
			<Grid type='div' stringStyle='grid-column: 1 / span 6;'>
				<TypedContent type="h1" >
					A Guide to Making Your Space Yours!
      			</TypedContent>
				<TypedContent type="h4" stringStyle='margin-bottom: 2rem'>
					Ultricies dolor blandit arcu ultrices praesent scelerisque nunc, nisi, nec. Posuere nunc massa sit sit ridiculus ac adipiscing auctor orci.
      			</TypedContent>
				<Button type='outlined' onClick={() => scrollInto(secondSection)}>
					Learn more
				</Button>
			</Grid>
			<Image
				stringStyle={`
			grid-column: 9 / span 4;
			width: 100%;
			`}
				src='https://via.placeholder.com/450'
			/>
		</Grid>
		<GRID
			stringStyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			background-color: ${theme.primary.background};
			`}
			ref={secondSection}
		>

		</GRID>
	</>);
}
