import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MediaSmall, Media4KUp, MediaLarge, MediaMedium } from "../helpers/mediaQueries";

const bottomBorder = () => `
	display: inline;
	padding-left: 1rem;
	padding-right: 1rem;
	box-shadow:
	inset 0 -0.14em #FBF6F4,
	inset 0 -0.4em #FFCF99;
`;

const masterTypography = (underline) => `
	padding: 0;
	margin: 0;
	font-weight:400;
	${MediaSmall} {
		max-width: 52rem;
 	 }
  	${underline === true ? bottomBorder() : ''};
`;

export const H1 = styled.h1`
  ${({ underline }) => masterTypography(underline)}
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
    font-size: 5.4rem;
  }
  ${MediaSmall} {
    font-size: 5rem;
    max-width: 52rem;
  }
    ${({ stringstyle }) => (stringstyle)}
`;

export const H2 = styled.h2`
  ${({ underline }) => masterTypography(underline)}
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
  ${({ underline }) => masterTypography(underline)}
  font-weight: 600;
  font-size: 3.8rem;
  ${Media4KUp} {
    font-size: 4.2rem;
  }
  ${MediaLarge} {
    font-size: 4rem;
  }
  ${MediaMedium} {
    font-size: 3.6rem;
  }
  ${MediaSmall} {
    font-size: 3.4rem;
  }
  color: ${({ theme, color }) => color || theme.textPrimary};
    ${({ stringstyle }) => (stringstyle)}
`;

export const H4 = styled.h4`
  ${({ underline }) => masterTypography(underline)}
    font-weight: 400;
    color: ${({ theme, color }) => color || theme.textPrimary};
    font-size: 2.4rem;
    line-height: 1.5
    ${Media4KUp} {
        font-size: 2.8rem;
    }
    ${MediaSmall} {
        font-size: 2rem;
        max-width: 52rem;
    }
    ${({ stringstyle }) => (stringstyle)}
`;

export const P = styled.p`
  ${({ underline }) => masterTypography(underline)}
  margin: 0 0 1rem 0;
  color: ${({ theme, color }) => color || theme.textPrimary};
    font-size: 1.8rem;
    line-height: 1.5
    ${Media4KUp} {
        font-size: 2rem;
    }
    ${MediaMedium} {
        font-size: 1.6rem;
    }
    ${({ stringstyle }) => (stringstyle)}
`;

export const P2 = styled.p`
  ${({ underline }) => masterTypography(underline)}
    margin: 0 0 1rem 0;
    color: ${({ theme, color }) => color || theme.textPrimary};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5
    ${Media4KUp} {
        font-size: 1.4rem;
    }
    ${MediaMedium} {
        font-size: 1rem;
    }
  ${({ stringstyle }) => (stringstyle)}
`;

export function TypedContent({ type, children, underline, ...other }) {
  switch (type) {
    case "h1":
      return (<>
        <H1 {...other} underline={underline}>{children}</H1>
        {underline ? <br /> : null}
      </>);
    case "h2":
      return <H2 {...other} underline={underline}>{children}</H2>;
    case "h3":
      return <H3 {...other} underline={underline}>{children}</H3>;
    case "h4":
      return <H4 {...other} underline={underline}>{children}</H4>;
    case "p":
      return <P {...other} underline={underline}>{children}</P>;
    case "p2":
      return <P2 {...other} underline={underline}>{children}</P2>;
    default:
      return null;
  }
}

TypedContent.defaultProps = {
  type: "p",
  stringstyle: '',
  underline: false,
};

TypedContent.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", 'p2']),
  color: PropTypes.string,
};
