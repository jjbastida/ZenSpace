import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CARD = styled.div`
	display: block;
    background-color: #FFF;
    padding: 3rem 2rem 4rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 7px rgba(215, 132, 38, 0.2);
    ${({ stringStyle }) => (stringStyle || '')}
`;

export function Card({ type, children, naked, ...other }) {
    return <CARD />
}

Card.defaultProps = {
    naked: false,
    stringStyle: '',
    childSpacing: '',
};

Card.propTypes = {
    naked: PropTypes.bool,
    color: PropTypes.string,
    stringStyle: PropTypes.string,
};