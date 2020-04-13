import React from 'react';
import { Routing } from './Routing';
import { lightTheme } from './theme/lightTheme';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { Navigation, ContentSkip } from './components/compoundComponents';
import { Footer } from './components/compoundComponents/Footer';
import { pathWhitelist } from './components/helpers/pathFunctions';
import { useLocalWindow } from './components/hooks/useLocalWindow';
import { AppContextProvider } from './contexts/AppContext';

export default function App() {
	const localWindow = useLocalWindow();
	const currentPath = (localWindow && localWindow.location && localWindow.location.pathname) || '';

	return (
		<ThemeProvider theme={lightTheme}>
			<AppContextProvider initialState={{
				localWindow,
				currentPath,
			}}>
				<Helmet>
					<title>ZenDen</title>
					<meta
						name='description'
						content='Breathe easy with the help of guided mindful sessions, to balance your living space and create a purposeful place to call your own.'
					/>
				</Helmet>
				<ContentSkip />
				<Navigation currentPath={currentPath} />
				<Routing />
				{pathWhitelist(currentPath, ['/']) ? <Footer /> : null}
			</AppContextProvider>
		</ThemeProvider>
	);
}







