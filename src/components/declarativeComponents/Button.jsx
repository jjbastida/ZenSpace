import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MediaSmall, MediaLarge, Media4KUp } from '../helpers/mediaQueries';
import { enterKeyIsPressed } from '../helpers/keydown';

const getBgColor = (bgColor) => {
    let color = '215, 132, 38';

    if (bgColor === 'white') {
        color = '136, 136, 159';
    }

    return color;
}

const masterButton = (stringStyle) => `
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

export const FILLED = styled.button`
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

export const OUTLINED = styled.button`
    ${({ stringStyle }) => masterButton(stringStyle)};
        color: ${({ theme }) => theme.textPrimary};
        border: 1px solid ${({ theme }) => theme.textPrimary};
        box-shadow: 0px 0px 0px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0);
    &:hover {
        background-color: #FFEEDB;
        transform: translateY(-2px);
        box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.2);
    }
    &:focus {
        background-color: #FFF;
        color: #3F5FA6;
        border-color: #3F5FA6;
        transform: translateY(-3px);
        box-shadow: 0px 4px 7px rgba(${({ bgColor }) => getBgColor(bgColor)}, 0.3);
    }
    &:active {
        background-color: #F3B976;
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
    stringStyle: '',
};

Button.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined']),
    color: PropTypes.string
};
