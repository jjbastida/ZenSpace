import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FILLED } from './Button';

export const CHECKBOX = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const DATE = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const TIME = styled.input`

	${ ({ stringstyle }) => (stringstyle)}
`;

export const TEXT = styled.input`
    border: 1px solid #CCCCDD;
    padding: 1.6rem 1.4rem;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.textPrimary || '#40405A'};
    &::placeholder {
        color: #CCCCDD;
    }
    ${({ disabled }) => disabled ? `
        color: #FFFFFF !important;
        transform: none !important;
        background-color: #EAEAEA !important;
        cursor: default !important;
        box-shadow: none !important;
    ` : ''}
	${({ label }) => (label ? 'margin-bottom: 0.6rem !important' : '')};
	${({ stringstyle }) => (stringstyle)}
`;

export const RADIO = styled.div`
    display: inline-block;
    height: 2em;
    width: 2em;
    margin-right: 0.8rem;
    border-radius: 500px;
    position: relative;
    border: 1px solid #40405A;
    cursor: pointer;
    &::after {
        content: '';
        display: ${({ value }) => (value ? 'block' : 'none')};;
        height: 1em;
        width: 1em;
        border-radius: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #40405A;
    }
	${({ stringstyle }) => (stringstyle)}
`;

export const FILE = styled.input`

	${({ stringstyle }) => (stringstyle)}
`;

export const SUBMIT = styled.input`

	${({ stringstyle }) => (stringstyle)}
`;

export const LABEL = styled.label`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textPrimary || '#40405A'};
	${({ labelstringstyle }) => (labelstringstyle)}
`;

export function Input({ type, label, value, children, name, onClick, ...other }) {
    const INPUT = () => {
        switch (type) {
            case 'checkbox':
                return (
                    <CHECKBOX
                        type={type}
                        label={label}
                        name={name}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'submit':
                return (
                    <FILLED
                        type={type}
                        label={label}
                        name={name}
                        {...other}
                    >
                        {value || children || ''}
                    </FILLED>
                )
            case 'date':
                return (
                    <DATE
                        type={type}
                        label={label}
                        name={name}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'time':
                return (
                    <TIME
                        type={type}
                        label={label}
                        name={name}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'text':
            case 'password':
            case 'email':
                return (
                    <TEXT
                        type={type}
                        label={label}
                        name={name}
                        id={label ? label : null}
                        {...other}
                    />
                )
            case 'radio':
                return (<>
                    <RADIO
                        value={value}
                    />
                    <input
                        style={{ display: 'none' }}
                        type={type}
                        label={label}
                        name={name}
                        value={value}
                        id={label ? label : null}
                        {...other}
                    />
                </>)
            case 'file':
                return (
                    <FILE
                        type={type}
                        label={label}
                        name={name}
                        id={label ? label : null}
                        {...other}
                    />
                )
            default:
                return null;
        };
    };

    return (<div onClick={onClick} data-label={label || ''} style={{ cursor: type === 'radio' ? 'pointer' : null }}>
        <INPUT />
        {label ?
            <LABEL htmlFor={label} {...other} style={{ cursor: type === 'radio' ? 'pointer' : null }}>
                {label || value || children}
            </LABEL>
            : null
        }
    </div>);

};

Input.defaultProps = {
    type: 'grid',
    naked: false,
    onClick: null,
    stringstyle: '',
    labelstringstyle: '',
};

Input.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'date', 'time', 'text', 'radio', 'email', 'file', 'password', 'submit']),
    naked: PropTypes.bool,
    stringstyle: PropTypes.string,
    name: PropTypes.string,
    labelstringstyle: PropTypes.string,
    childrenSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};