import React, { useRef } from 'react';
import { TypedContent, Grid, PageHelm, Image, Button } from '../components/declarativeComponents';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { scrollInto } from '../components/helpers/scrollIntoView';
import { GRID } from '../components/declarativeComponents/Grid';
import { homeData } from './data/homeData'

export function Home({ pageData }) {
	const secondSection = useRef();
	const theme = useContext(ThemeContext);

	return (<>
		<PageHelm pageData={pageData} />
		<Grid
			stringStyle={`
				padding-top: 10rem;
				padding-bottom: 8rem;
			`}
			type='grid'
		>
			<Grid
				type='div'
				stringStyle={`
					max-width: 94rem;
					align-self: center;
					grid-column: auto / span 6;
				`}
			>
				<TypedContent type='h1' stringStyle='max-width: 75rem;'>
					{homeData.sections[0].content.title}
				</TypedContent>
				<TypedContent type='h4' stringStyle='margin-bottom: 2rem;'>
					{homeData.sections[0].content.body}
				</TypedContent>
				<Button type='outlined' onClick={() => scrollInto(secondSection)}>
					{homeData.sections[0].content.button.buttonText}
				</Button>
			</Grid>
			<Image
				stringStyle={`
				grid-column: 9 / span 4;
				width: 100%;
				`}
				src={homeData.sections[0].content.imagePath}
			/>
		</Grid>
		<GRID
			stringStyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			background-color: ${theme.primary.background};
			`}
			childrenSize='4'
			ref={secondSection}
		>
			{homeData.sections[1].content.blocks.length && homeData.sections[1].content.blocks.map(({ title, imagePath }, index) => (
				<div>
					<Image stringStyle='width:100%; padding-bottom: 2rem;' src={imagePath} />
					<TypedContent type='h4'>
						{title}
					</TypedContent>
				</div>
			))}
		</GRID>
		<Grid
			stringStyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			`}
			type='grid'
		>
			<Image
				stringStyle={`
				grid-column: auto / span 4;
				width: 100%;
				`}
				src={homeData.sections[0].content.imagePath}
			/>

			<Grid
				type='div'
				stringStyle={`
					grid-column: 6 / span 6;
					max-width: 94rem;
					align-self: center;
				`}
			>
				<TypedContent type='h2' stringStyle='max-width: 75rem;'>
					{homeData.sections[2].content.title}
				</TypedContent>
				<TypedContent type='h4' stringStyle='margin-bottom: 2rem;'>
					{homeData.sections[2].content.body}
				</TypedContent>
			</Grid>
		</Grid>
		<Grid
			stringStyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			background-color: ${theme.primary.background};
			`}
			type='grid'
		>
			<Grid
				type='div'
				stringStyle={`
					grid-column: 3 / span 8;
					max-width: 94rem;
					align-self: center;
				`}
			>
				<TypedContent type='h2' stringStyle='max-width: 75rem;'>
					{homeData.sections[3].content.title}
				</TypedContent>
				<TypedContent type='h4' stringStyle='margin-bottom: 2rem;'>
					{homeData.sections[3].content.body}
				</TypedContent>
				<Button
					href={homeData.sections[3].content.button.buttonLink}
					type='outlined'
					stringStyle={`
						display: inline-block;
					`}
				>
					{homeData.sections[3].content.button.buttonText}
				</Button>
			</Grid>
		</Grid>
	</>);
}
