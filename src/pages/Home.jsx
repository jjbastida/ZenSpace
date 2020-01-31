import React from "react";
import { TypedContent, Grid, PageHelm } from "../components/declarativeComponents";

export function Home({ pageData }) {

	return (
		<Grid
			stringStyle={`
			padding-top: 16rem;
			padding-bottom: 14rem;
			`}
		>
			<PageHelm pageData={pageData} />
			<TypedContent type="h1" style={{ gridColumn: "1 / span 6" }}>
				A Guide to Making Your Space Yours!
      </TypedContent>
			<TypedContent type="h3" style={{ gridColumn: "1 / span 6" }}>
				Lorem ipsum
      </TypedContent>
		</Grid>
	);
}
