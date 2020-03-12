import React, { useState } from 'react';
import { Routing } from './Routing';
import { lightTheme } from './theme/lightTheme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { Navigation, ContentSkip } from './components/compoundComponents';
import { Footer } from './components/compoundComponents/Footer';
import { AppContextProvider } from './contexts/AppContext';

export default function App() {
	const [localWindow, setLocalWindow] = useState(window || {});
	const initialState = {
		localWindow,
		setLocalWindow,
	}
	const currentPath = (localWindow && localWindow.location && localWindow.location.pathname) || '';
	const noFooterPathCheck = () => ['/'].includes(currentPath);
	const GlobalStyle = createGlobalStyle`
	`;

	return (
		<AppContextProvider initialState={initialState}>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Helmet>
					<title>Generic Title</title>
					<meta name='description' content='LoremIpsum' />
				</Helmet>
				<ContentSkip />
				<Navigation />
				<Routing />
				{noFooterPathCheck() ? <Footer /> : null}
			</ThemeProvider>
		</AppContextProvider>
	);
}