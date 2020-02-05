import React from "react";
import styled from "styled-components";

export const IMG = styled.img`
  ${({ stringStyle }) => (stringStyle)}
`;

export function Image({ children, ...other }) {
    return <IMG {...other} />
}

Image.defaultProps = {
    stringStyle: '',
};