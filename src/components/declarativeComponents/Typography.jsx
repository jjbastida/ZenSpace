import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MediaSmall, Media4KUp, MediaLarge, MediaMedium } from "../helpers/mediaQueries";

const masterTypography = `
	padding: 0;
	margin: 0;
	font-weight:400;
	${MediaSmall} {
		max-width: 52rem;
  }
`;

export const H1 = styled.h1`
  ${masterTypography}
  font-weight: 700;
  color: ${({ theme, color }) => color || theme.textPrimary};
  font-size: 6rem;
  ${Media4KUp} {
    font-size: 6.4rem;
  }
  ${MediaLarge} {
    font-size: 5.6rem;
  }
  ${MediaMedium} {
    font-size: 5.2rem;
  }
  ${MediaSmall} {
    font-size: 4.8rem;
    max-width: 52rem;
    ${({ stringstyle }) => (stringstyle)}
  }
`;

export const H2 = styled.h2`
  ${masterTypography}
  font-weight: 700;
  font-size: 5.2rem;
  ${Media4KUp} {
    font-size: 5.6rem;
  }
  ${MediaLarge} {
    font-size: 4.8rem;
  }
  ${MediaMedium} {
    font-size: 4.4rem;
  }
  ${MediaSmall} {
    font-size: 4rem;
    max-width: 52rem;
  }
  color: ${({ theme, color }) => color || theme.textPrimary};
  ${({ stringstyle }) => (stringstyle)}
`;

export const H3 = styled.h3`
  ${masterTypography}
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme, color }) => color || theme.textPrimary};
    ${({ stringstyle }) => (stringstyle)}
`;

export const H4 = styled.h4`
  ${masterTypography}
    font-weight: 400;
    color: ${({ theme, color }) => color || theme.textPrimary};
    font-size: 2rem;
    line-height: 1.5
    ${Media4KUp} {
        font-size: 2.8rem;
    }
    ${MediaMedium} {
        font-size: 1.8rem;
    }
    ${MediaSmall} {
        font-size: 1.6rem;
        max-width: 52rem;
    }
    ${({ stringstyle }) => (stringstyle)}
`;

export const P = styled.p`
  ${masterTypography}
  margin: 0 0 1rem 0;
  color: ${({ theme, color }) => color || theme.textPrimary};
  ${({ stringstyle }) => (stringstyle)}
`;

export const P2 = styled.p`
  ${masterTypography}
    margin: 0 0 1rem 0;
    color: ${({ theme, color }) => color || theme.textPrimary};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5
    ${Media4KUp} {
        font-size: 1.8rem;
    }
    ${MediaMedium} {
        font-size: 1.4rem;
    }
  ${({ stringstyle }) => (stringstyle)}
`;

export function TypedContent({ type, children, ...other }) {
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
    case "p2":
      return <P2 {...other}>{children}</P2>;
    default:
      return null;
  }
}

TypedContent.defaultProps = {
  type: "p",
  stringstyle: '',
};

TypedContent.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", 'p2']),
  color: PropTypes.string,
};
