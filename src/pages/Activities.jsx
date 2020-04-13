import React, { useContext, useEffect } from 'react';
import { getActivity } from './data/activitiesData';
import { Grid } from '../components/declarativeComponents/Grid';
import { AppContext } from '../contexts/AppContext';
import { MediaSmall } from '../components/helpers/mediaQueries';
import { rightKeyIsPressed, leftKeyIsPressed } from '../components/helpers/keydown';
import { PageArrows } from '../components/compoundComponents/PageArrows';
import { TypedContent } from '../components/declarativeComponents';
import { PageSteps } from '../components/compoundComponents/PageSteps';
import { ParseParagraphText } from '../components/helpers/ParseParagraphText';


export function Activities({ match }) {
    const { params: { slug } } = match;
    const activityContent = getActivity(slug).content;
    const { parseCookie, dispatch } = useContext(AppContext);
    const progressStep = parseCookie().progress[slug];
    const setProgStep = (step) => dispatch.updateCookieProgValue(slug, step);
    const CustomSection = activityContent[progressStep].CustomSection;

    useEffect(() => {
        function keyPressRight(event) {
            if (rightKeyIsPressed(event) && progressStep < activityContent.length - 1) {
                setProgStep(progressStep + 1)
            }
        };
        function keyPressLeft(event) {
            if (leftKeyIsPressed(event) && progressStep > 0) {
                setProgStep(progressStep - 1)
            }
        };
        document.addEventListener('keydown', keyPressRight);
        document.addEventListener('keydown', keyPressLeft);

        return () => {
            document.removeEventListener('keydown', keyPressRight);
            document.removeEventListener('keydown', keyPressLeft);
        }
        // eslint-disable-next-line
    }, [progressStep])

    return (<>
        <PageArrows
            currentPage={progressStep}
            setPage={setProgStep}
            arrayLength={activityContent.length}
            continueText='Dashboard'
            continueLink='/dashboard/'
        />
        <Grid
            stringstyle={`
				padding-top: 4rem;
				padding-bottom: 10rem;
				${MediaSmall}{
					padding-top: 4rem;
					padding-bottom: 6rem;
				}
			`}
        >
            <Grid
                type='div'
                stringstyle={`
					max-width: 94rem;
					align-self: center;
					grid-column: 3 / span 8;
				`}
            >
                <TypedContent type='h2' underline={true} stringstyle={`margin-bottom: 3rem; display: inline-block; ${MediaSmall}{ display: inline }`}>
                    {getActivity(slug).name}
                </TypedContent>
                <TypedContent type='h3' stringstyle={`margin-bottom: 1rem; display: inline-block; ${MediaSmall}{ margin-top: 2rem; }`}>
                    {activityContent[progressStep].title}
                </TypedContent>
                <ParseParagraphText content={activityContent[progressStep].body || null} />
                {activityContent[progressStep].CustomSection ? <CustomSection /> : null}
            </Grid>
        </Grid>
        <PageSteps
            currentPage={progressStep}
            setPage={setProgStep}
            array={activityContent}
        />
    </>);
}
