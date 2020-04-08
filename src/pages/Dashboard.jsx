import React, { useContext } from "react";
import { Grid, TypedContent } from "../components/declarativeComponents";
import { AppContext } from "../contexts/AppContext";

export function Dashboard() {
    const { parseCookie, dispatch } = useContext(AppContext);
    const { walkthroughStep, progress, loggedIn } = parseCookie();

    return (
        <Grid
            type='grid'
            stringstyle={`
                padding-top: 8rem;
                padding-bottom: 8rem;
            `}
        >
            <TypedContent
                type='h1'
                stringstyle={`
                    grid-column: auto / span 8;
                `}
            >
                Organizing Dashboard
            </TypedContent>
            <TypedContent
                type='h4'
                stringstyle={`
                    grid-column: auto / span 8;
                `}
            >
                Select one of the activities below to start...
            </TypedContent>
        </Grid>
    );
}
