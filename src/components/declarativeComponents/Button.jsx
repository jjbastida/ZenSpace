import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MediaSmall, MediaLarge, Media4KUp } from '../helpers/mediaQueries';
import { enterKeyIsPressed } from '../helpers/keydown';

const getBgColor = (bgColor) => {
    let color = '226, 222, 226';

    if (bgColor === 'white') {
        color = '136, 136, 159';
    }

    return color;
}

const masterButton = (stringstyle, disabled) => `
	display: block;
	padding: 1.4rem 2.4rem;
	margin: 0;
	font-weight:500;
	white-space: nowrap;
	background: none;
	border: none;
	font-size: 1.8rem;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    border-radius: 1rem;
    transition: color ease 400ms, border ease 400ms, background-color ease 400ms, transform ease 400ms, box-shadow ease 400ms;
    ${disabled ? `
        color: #FFFFFF !important;
        transform: none !important;
        background-color: #CCCCDD !important;
        border-color: #CCCCDD !important;
        cursor: default !important;
        box-shadow: none !important;
    ` : ''}
	${Media4KUp} {
		font-size: 2rem;
        padding: 1.6rem 2.6rem;
	}
	${MediaLarge} {
		font-size: 1.8rem;
	}
	${MediaSmall} {
        font-size: 1.6rem;
        padding: 1.4rem 2rem;
    }
    &:focus {
        outline: none;
    }
    &:active {
        transition-duration: 200ms;
    }
    ${stringstyle}
`;

export const FILLED = styled.button`
  ${({ stringstyle, disabled }) => masterButton(stringstyle, disabled)};
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => theme.textPrimary};
  box-shadow: 0px 0px 0px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
  &:hover {
	color: #FFFFFF;
	border-color: #56688F;
    background-color: #56688F;
    transform: translateY(-2px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.3);
  }
  &:focus {
	color: #FFFFFF;
	border-color: #3F5FA6;
    background-color: #3F5FA6;
    transform: translateY(-3px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.5);
  }
  &:active {
    color: #FFFFFF;
    border-color: #313B52;
    background-color: #313B52;
    transform: translateY(1px);
    box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
  }
`;

export const OUTLINED = styled.button`
  ${({ stringstyle, disabled }) => masterButton(stringstyle, disabled)};
        color: ${({ theme }) => theme.textPrimary};
        background-color: #FFF;
        border: 1px solid ${({ theme }) => theme.textPrimary};
        box-shadow: 0px 0px 0px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
    &:hover {
        background-color: rgba(47,59,82,0.1);
        transform: translateY(-2px);
        box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.3);
    }
    &:focus {
        background-color: #FFF;
        color: #3F5FA6;
        border-color: #3F5FA6;
        transform: translateY(-3px);
        box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.5);
    }
    &:active {
        background-color: rgba(47,59,82,0.3);
        color: ${({ theme }) => theme.textPrimary};
        border-color: ${({ theme }) => theme.textPrimary};
        transform: translateY(1px);
        box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
    }
`;

export function Button({ type, href, target, theme, children, buttonProps, onClick, ...other }) {
    const clickBlur = ({ target }) => {
        onClick();
        target.blur();
    };

    switch (type) {
        case 'filled':
            return <FILLED
                {...other}
                onClick={(event) => clickBlur(event)}
                as={!href ? 'button' : 'a'}
                href={href || ''}
                onKeyDown={(event) => (enterKeyIsPressed(event) && clickBlur(event))}
            >
                {children}
            </FILLED>;
        case 'outlined':
            return <OUTLINED
                {...other}
                onClick={(event) => clickBlur(event)}
                as={!href ? 'button' : 'a'}
                href={href || ''}
                onKeyDown={(event) => (enterKeyIsPressed(event) && clickBlur(event))}
            >
                {children}
            </OUTLINED>;
        default:
            return null
    }
}

Button.defaultProps = {
    type: 'filled',
    stringstyle: '',
};

Button.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.string
};
