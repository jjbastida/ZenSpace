import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CARD = styled.div`
	display: block;
    background-color: #FFF;
    padding: 3rem 2rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadow || 'box-shadow: 0px 4px 7px rgba(226, 222, 226, 0.3)'};
    ${({ stringstyle }) => (stringstyle || '')}
`;

export function Card({ type, children, naked, ...other }) {
    return <CARD />
}

Card.defaultProps = {
    naked: false,
    stringstyle: '',
    childSpacing: '',
};

Card.propTypes = {
    naked: PropTypes.bool,
    color: PropTypes.string,
    stringstyle: PropTypes.string,
};