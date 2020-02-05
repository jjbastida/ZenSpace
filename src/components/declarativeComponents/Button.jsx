import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MediaSmall, MediaLarge, Media4KUp } from "../helpers/mediaQueries";

const masterButton = () => `
	display: block;
	padding: 1.4rem 2.4rem;
	margin: 0;
	font-weight:600;
	white-space: nowrap;
	background: none;
	border: none;
	font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
	border-radius: 1rem;
	${Media4KUp} {
		font-size: 1.8rem;
    padding: 1.6rem 2.6rem;
	}
	${MediaLarge} {
		font-size: 1.4rem;
	}
	${MediaSmall} {
    font-size: 1.2rem;
    padding: 1rem 2rem;
	}
`;

export const FILLED = styled.button`
  ${masterButton()}
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.textPrimary};
`;

export const OUTLINED = styled.button`
	${masterButton()}
	  color: ${({ theme }) => theme.textPrimary};
	  border: 1px solid ${({ theme }) => theme.textPrimary};
`;

export const B_LINK_FILLED = styled.a`
  ${masterButton()}
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.textPrimary};
`;

export const B_LINK_OUTLINED = styled.a`
      ${masterButton()}
	  color: ${({ theme }) => theme.textPrimary};
	  border: 1px solid ${({ theme }) => theme.textPrimary};
`;

export function Button({ type, href, target, theme, children, buttonProps, ...other }) {
  if (!href) {
    switch (type) {
      case "filled":
        return <FILLED {...other}>{children}</FILLED>;
      case "outlined":
        return <OUTLINED {...other}>{children}</OUTLINED>;
      default:
        return <FILLED {...other}>{children}</FILLED>;
    }
  } else {
    switch (type) {
      case "filled":
        return (
          <B_LINK_FILLED href={href} {...other}>
            {children}
          </B_LINK_FILLED>
        );
      case "outlined":
        return (
          <B_LINK_OUTLINED href={href} {...other}>
            {children}
          </B_LINK_OUTLINED>
        );
      default:
        return (
          <B_LINK_FILLED href={href} {...other}>
            {children}
          </B_LINK_FILLED>
        );
    }
  }
}

Button.defaultProps = {
  type: "p"
};

Button.propTypes = {
  type: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string
};
