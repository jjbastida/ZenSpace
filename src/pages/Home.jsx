import React from 'react';
import { TypedContent } from '../components/singularComponents/Typography';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { Grid } from '../components/singularComponents/Grid';
import {PageHelm} from '../components/singularComponents/PageHelm';
import { useContext } from 'react';

export function Home() {
	const theme = useContext(ThemeContext);
	const pageData={
		title: 'Home',
		description: 'The homepage of this site.',
	};

	return (
		<Grid stringStyle={`
		padding-top: 16rem;
		padding-bottom: 14rem;
  `}>
			<PageHelm pageData={pageData}/>
				<TypedContent type='h1' style={{gridColumn: '1 / span 6'}}>
					A Guide to Making Your Space Yours!
				</TypedContent>
				<TypedContent type='h3' style={{gridColumn: '1 / span 6'}}>
				Lorem ipsum
				</TypedContent>
		</Grid>
	);
}
