import React from 'react';
import { Routing } from './Routing';
import { lightTheme } from './theme/lightTheme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { Navigation, ContentSkip } from './components/compoundComponents';

export default function App() {
	const theme = true;
	const GlobalStyle = createGlobalStyle`
	body {
		background: ${theme ? lightTheme.background : {}};
	}
	`
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Helmet>
				<title>Generic Title</title>
				<meta name='description' content='LoremIpsum' />
			</Helmet>
			<ContentSkip />
			<Navigation />
			<Routing />
		</ThemeProvider>
	);
}