import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MediaSmall, MediaLarge, Media4KUp } from '../helpers/mediaQueries';

export const LINK = styled.a`
    color: #FFFFFF;
	padding: 0.2rem 0.3rem;
	margin: 0 0.2rem;
	white-space: nowrap;
	background: none;
	border: none;
	font-size: 1.8rem;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
    border-radius: 0.4rem;
    transition: color ease 200ms, background-color ease 200ms;
    &:focus {
        outline: none;
        background-color: rgba(250,250,250,0.3);
        transition: background-color 100ms ease;
    }
    &:hover {
        background-color: rgba(250,250,250,0.15);
    }
	${Media4KUp} {
		font-size: 2rem;
        padding: 1.6rem 2.6rem;
	}
	${MediaLarge} {
		font-size: 1.8rem;
	}
	${MediaSmall} {
        font-size: 1.6rem;
        padding: 0.6rem 2rem;
    }
    ${({ stringstyle }) => stringstyle};
`;

export function Link({ href, target, theme, children, ...other }) {
    return <LINK
        {...other}
        href={href || ''}
        target={target || '_self'}
    >
        {children}
    </LINK>;
}

Link.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.string
};
