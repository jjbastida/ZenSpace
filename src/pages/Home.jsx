import React, { useRef } from "react";
import { TypedContent, Grid, PageHelm, Image, Button } from "../components/declarativeComponents";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

export function Home({ pageData }) {
	const secondSection = useRef(null);
	const theme = useContext(ThemeContext);

	return (<>
		<PageHelm pageData={pageData} />
		<Grid
			stringStyle={`
			padding-top: 16rem;
			padding-bottom: 14rem;
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
				<Button type='outlined'>
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
		<Grid
			stringStyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			background-color: ${theme.primary.background};
			`}
			type='grid'
		>

		</Grid>
	</>);
}
