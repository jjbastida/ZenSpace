import React from "react";
import { Grid, TypedContent, Button } from "../declarativeComponents";
import styled from "styled-components";

const DROPSHADOW_HEADER = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 4px 7px rgba(215, 132, 38, 0.2);
`;

export function Navigation() {
  return (
    <DROPSHADOW_HEADER>
      <Grid
        type="flex"
        stringStyle={`
            align-items: flex-start;
            justify-content: space-between;
        `}
      >
        <TypedContent variant="h3">ZenDen</TypedContent>
        <Grid type="naked-flex" childSpacing="2rem">
          <Button href="/login" type="outlined">
            {" "}
            Login{" "}
          </Button>
          <Button href="/sign-up" type="filled">
            {" "}
            Sign Up{" "}
          </Button>
        </Grid>
      </Grid>
    </DROPSHADOW_HEADER>
  );
}
