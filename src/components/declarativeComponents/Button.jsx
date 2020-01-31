import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';

const masterButton = () => (
	  `
	display: block;
	padding: 1rem 2.4rem 0.8rem;
	margin: 0;
	font-weight:600;
	white-space: nowrap;
	background: none;
	border: none;
	font-size: 1.6rem;
	text-decoration: none;
	border-radius: 1rem;
	@media (min-width: 1919.9px) {
		font-size: 1.8rem;
		padding: 1.6rem 2.6rem 1.4rem;
	}
	@media (max-width: 1239.9px) {
		font-size: 1.4rem;
	}
	@media (max-width: 959.9px) {
		font-size: 1.2rem;
		padding: 0.8rem 2rem 0.6rem;
	}
`);

export const FILLED = styled.button`
      ${masterButton()}
	  color: #FFFFFF;
	  background-color: ${({theme}) => theme.textPrimary};
`;

export const OUTLINED = styled.button`
	${masterButton()}
	  color: ${({theme}) => theme.textPrimary};
	  border: 1px solid ${({theme}) => theme.textPrimary};
`;

export const B_LINK_FILLED = styled.a`
      ${masterButton()}
	  color: #FFFFFF;
	  background-color: ${({theme}) => theme.textPrimary};
`;

export const B_LINK_OUTLINED = styled.a`
      ${masterButton()}
	  color: ${({theme}) => theme.textPrimary};
	  border: 1px solid ${({theme}) => theme.textPrimary};
`;

export function Button ({ type, href, target, theme, children, buttonProps, ...other }) {
	if (!href){
	switch (type) {
			case 'filled':
				return (
						<FILLED {...other}>
							{children}
						</FILLED>
				)
			case 'outlined':
				return (
						<OUTLINED {...other}>
							{children}
						</OUTLINED>
				)
			default:
				return null;
		}
	} else {
		switch (type) {
			case 'filled':
				return (
					<B_LINK_FILLED href={href} {...other}>
						{children}
					</B_LINK_FILLED>
				)
			case 'outlined':
				return (
					<B_LINK_OUTLINED href={href} {...other}>
						{children}
					</B_LINK_OUTLINED>
				)
			default:
				return null;
		}
	}
}

Button.defaultProps = {
      type: 'p',
};

Button.propTypes = {
      type: PropTypes.oneOf(['filled', 'outlined']),
      color: PropTypes.string,
};