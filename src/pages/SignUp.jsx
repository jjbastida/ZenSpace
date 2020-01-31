import React from "react";
import { TypedContent, PageHelm } from "../components/declarativeComponents";

export function SignUp({ pageData }) {
	return (
		<>
			<PageHelm pageData={pageData} />
			<TypedContent type="h2">SignUp</TypedContent>
		</>
	);
}
