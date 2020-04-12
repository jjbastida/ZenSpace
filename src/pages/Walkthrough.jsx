import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Grid, TypedContent, Image } from '../components/declarativeComponents';
import { MediaSmall } from '../components/helpers/mediaQueries';
import { PageArrows } from '../components/compoundComponents/PageArrows';
import { PageSteps } from '../components/compoundComponents/PageSteps';
import { walkthroughData } from './data/WalkthroughData';
import { rightKeyIsPressed, leftKeyIsPressed } from '../components/helpers/keydown';

export function Walkthrough() {
	const { parseCookie, dispatch } = useContext(AppContext);
	const { walkthroughStep } = parseCookie();
	const setWalkthroughStep = (step) => dispatch.updateCookieValue('walkthroughStep', step);

	useEffect(() => {
		function keyPressRight(event) {
			if (rightKeyIsPressed(event) && walkthroughStep < walkthroughData.length - 1) {
				setWalkthroughStep(walkthroughStep + 1)
			}
		};
		function keyPressLeft(event) {
			if (leftKeyIsPressed(event) && walkthroughStep > 0) {
				setWalkthroughStep(walkthroughStep - 1)
			}
		};
		document.addEventListener('keydown', keyPressRight);
		document.addEventListener('keydown', keyPressLeft);

		return () => {
			document.removeEventListener('keydown', keyPressRight);
			document.removeEventListener('keydown', keyPressLeft);
		}
		// eslint-disable-next-line
	}, [walkthroughStep])

	return (<>
		<PageArrows
			currentPage={walkthroughStep}
			setPage={setWalkthroughStep}
			arrayLength={walkthroughData.length}
			continueText='Continue'
			continueLink='/dashboard/'
		/>
		<Grid
			stringstyle={`
				padding-top: 2rem;
				padding-bottom: 10rem;
				${MediaSmall}{
					padding-top: 4rem;
					padding-bottom: 6rem;
				}
			`}
		>
			<Image
				stringstyle={`
					grid-column: 3 / span 8;
					width: 100%;
					object-fit: cover;
					max-height: 55rem;
					margin-bottom: 2rem;
					${MediaSmall}{
						max-height: 25rem;
					}
				`}
				src={walkthroughData[walkthroughStep].imagePath}
			/>
			<Grid
				type='div'
				stringstyle={`
					max-width: 94rem;
					align-self: center;
					grid-column: 3 / span 8;
				`}
			>
				<TypedContent type='h2' underline={true}>
					{walkthroughData[walkthroughStep].title}
				</TypedContent>
				<TypedContent type='h4'>
					{walkthroughData[walkthroughStep].body}
				</TypedContent>
			</Grid>
		</Grid>
		<PageSteps
			currentPage={walkthroughStep}
			setPage={setWalkthroughStep}
			array={walkthroughData}
		/>
	</>);
}
