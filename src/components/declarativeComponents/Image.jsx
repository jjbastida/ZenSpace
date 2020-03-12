import React from "react";
import styled from "styled-components";

export const IMG = styled.img`
  ${({ stringstyle }) => (stringstyle)}
`;

export function Image({ children, ...other }) {
  return <IMG {...other} />
}

Image.defaultProps = {
  stringstyle: '',
};