import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MediaSmall, MediaLarge, Media4KUp } from '../helpers/mediaQueries';

const masterLink = (stringStyle) => `
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
    text-align: center;
    border-radius: 1rem;
    transition: color ease 400ms, border ease 400ms, background-color ease 400ms, transform ease 400ms, box-shadow ease 400ms;
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
    &:focus {
        outline: none;
    }
    &:active {
        transition-duration: 200ms;
    }
    ${stringStyle}
`;

export const LINK = styled.button`
  ${({ stringStyle }) => masterButton(stringStyle)};
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  box-shadow: 0px 0px 0px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
  &:hover {
	color: #FFFFFF;
	border-color: #56688F;
    background-color: #56688F;
    transform: translateY(-2px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.2);
  }
  &:focus {
	color: #FFFFFF;
	border-color: #3F5FA6;
    background-color: #3F5FA6;
    transform: translateY(-3px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.3);
  }
  &:active {
    color: #FFFFFF;
    border-color: #313B52;
    background-color: #313B52;
    transform: translateY(1px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
  }
`;

export function Link({ href, target, theme, children, ...other }) {
    return <LINK
        {...other}
        href={href || ''}
    >
        {children}
    </LINK>;
}

Link.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.string
};
