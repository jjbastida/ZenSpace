import React, { useRef } from 'react';
import { TypedContent, Grid, PageHelm, Image, Button } from '../components/declarativeComponents';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { scrollInto } from '../components/helpers/scrollIntoView';
import { GRID } from '../components/declarativeComponents/Grid';
import { homeData } from './data/homeData'
import { MediaSmall } from '../components/helpers/mediaQueries';

export function Home({ pageData }) {
	const secondSection = useRef();
	const theme = useContext(ThemeContext);

	return (<>
		<Grid
			stringstyle={`
				padding-top: 10rem;
				padding-bottom: 8rem;
				${MediaSmall}{
					padding-top: 8rem;
					padding-bottom: 6rem;
				}
			`}
			type='grid'
		>
			<Grid
				type='div'
				stringstyle={`
					max-width: 94rem;
					align-self: center;
					grid-column: auto / span 6;
				`}
			>
				<TypedContent type='h1' stringstyle='max-width: 75rem;'>
					{homeData.sections[0].content.title}
				</TypedContent>
				<TypedContent type='h4' stringstyle='margin-bottom: 2rem;'>
					{homeData.sections[0].content.body}
				</TypedContent>
				<Button type='outlined' onClick={() => scrollInto(secondSection)}>
					{homeData.sections[0].content.button.buttonText}
				</Button>
			</Grid>
			<Image
				stringstyle={`
					grid-column: 9 / span 4;
					width: 100%;
				`}
				src={homeData.sections[0].content.imagePath}
			/>
		</Grid>
		<GRID
			stringstyle={`
			padding-top: 7rem;
			padding-bottom: 7rem;
			background-color: ${theme.backgroundSecondary};
			`}
			childrenSize='4'
			ref={secondSection}
		>
			{homeData.sections[1].content.blocks.length && homeData.sections[1].content.blocks.map(({ title, imagePath }, index) => (
				<div key={title}>
					<Image stringstyle={'width:100%; padding-bottom: 2rem;'} src={imagePath} />
					<TypedContent type='h4'>
						{title}
					</TypedContent>
				</div>
			))}
		</GRID>
		<Grid
			stringstyle={`
				padding-top: 7rem;
				padding-bottom: 7rem;
			`}
			type='grid'
		>
			<Image
				stringstyle={`
					grid-column: auto / span 4;
					width: 100%;
				`}
				src={homeData.sections[0].content.imagePath}
			/>

			<Grid
				type='div'
				stringstyle={`
					grid-column: 6 / span 6;
					max-width: 94rem;
					align-self: center;
				`}
			>
				<TypedContent type='h2' stringstyle='max-width: 75rem;'>
					{homeData.sections[2].content.title}
				</TypedContent>
				<TypedContent type='h4' stringstyle='margin-bottom: 2rem;'>
					{homeData.sections[2].content.body}
				</TypedContent>
			</Grid>
		</Grid>
		<Grid
			stringstyle={`
				padding-top: 7rem;
				padding-bottom: 7rem;
				background-color: ${theme.backgroundSecondary};
				${MediaSmall}{
					padding-top: 6rem;
					padding-bottom: 4rem;
				}
				`}
			type='grid'
		>
			<Grid
				type='div'
				stringstyle={`
					grid-column: 3 / span 8;
					max-width: 94rem;
					align-self: center;
				`}
			>
				<TypedContent type='h2' stringstyle='max-width: 75rem;'>
					{homeData.sections[3].content.title}
				</TypedContent>
				<TypedContent type='h4' stringstyle='margin-bottom: 2rem;'>
					{homeData.sections[3].content.body}
				</TypedContent>
				<Button
					href={homeData.sections[3].content.button.buttonLink}
					type='outlined'
					stringstyle={`
						display: inline-block;
					`}
				>
					{homeData.sections[3].content.button.buttonText}
				</Button>
			</Grid>
		</Grid>
	</>);
}
