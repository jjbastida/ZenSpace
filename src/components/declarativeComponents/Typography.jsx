import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MediaSmall, Media4KUp, MediaLarge, MediaMedium } from "../helpers/mediaQueries";

const masterTypography = () => `
	padding: 0;
	margin: 0;
	font-weight:400;
	${MediaSmall} {
		max-width: 52rem;
	}
`;

export const H1 = styled.h1`
  ${masterTypography()}
  font-weight: 700;
  font-size: 6.4rem;
  color: ${({ theme, color }) => color || theme.textPrimary};
  ${Media4KUp} {
    font-size: 6.8rem;
  }
  ${MediaLarge} {
    font-size: 6rem;
  }
  ${MediaMedium} {
    font-size: 5.6rem;
  }
  ${MediaSmall} {
    font-size: 4.8rem;
    max-width: 52rem;
  }
`;

export const H2 = styled.h2`
  ${masterTypography()}
  font-weight: 700;
  color: ${({ theme, color }) => color || theme.textPrimary};
`;

export const H3 = styled.h3`
  ${masterTypography()}
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme, color }) => color || theme.textPrimary};
`;

export const H4 = styled.h4`
      font-weight: 400;
      ${masterTypography()}
      color: ${({ theme, color }) => color || theme.textPrimary};
`;

export const P = styled.p`
  ${masterTypography()}
  margin: 0 0 1rem 0;
  color: ${({ theme, color }) => color || theme.textPrimary};
`;

export function TypedContent({ type, theme, children, ...other }) {
  switch (type) {
    case "h1":
      return <H1 {...other}>{children}</H1>;
    case "h2":
      return <H2 {...other}>{children}</H2>;
    case "h3":
      return <H3 {...other}>{children}</H3>;
    case "h4":
      return <H4 {...other}>{children}</H4>;
    case "p":
      return <P {...other}>{children}</P>;
    default:
      return null;
  }
}

TypedContent.defaultProps = {
  type: "p"
};

TypedContent.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p"]),
  color: PropTypes.string
};
