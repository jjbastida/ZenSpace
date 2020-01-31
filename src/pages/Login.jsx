import React from "react";
import { TypedContent, PageHelm } from "../components/declarativeComponents";

export function Login({pageData}) {
  return (
    <>
      <PageHelm pageData={pageData} />
      <TypedContent type="h2">Login</TypedContent>
    </>
  );
}
