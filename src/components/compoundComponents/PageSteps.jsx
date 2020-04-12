import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../declarativeComponents';
import styled from 'styled-components';
import { MediaLarge, MediaSmall } from '../helpers/mediaQueries';

const PAGE_CIRCLE = styled.button`
    display: block;
    height: 1.4rem;
    width: 1.4rem;
    margin: 0 1.6rem;
    padding: 0;
	font-weight:500;
	white-space: nowrap;
	background: none;
	border: none;
	font-size: 1.8rem;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    border-radius: 100rem;
    background-color: #FFCF99 !important;
    border: 1px solid ${({ theme }) => theme.textPrimary};
    ${({ inactive }) => inactive ? 'background-color: #FFF !important; box-shadow: none !important;' : ''}
	${MediaLarge} {
        height: 1.2rem;
        width: 1.2rem;
	}
	${MediaSmall} {
        height: 1.6rem;
        width: 1.6rem;
    }
    &:focus {
        outline: none;
    }
    &:active {
        transition-duration: 200ms;
    }
    ${({ stringstyle }) => stringstyle}
`;

export function PageSteps({ currentPage, setPage, array }) {
    return (
        <Grid
            type='flex'
            stringstyle='position: fixed; bottom: 3rem; left: 50%; transform: translateX(-50%);'
        >
            {Array.isArray(array) && array.map(({ title }, index) => (
                <PAGE_CIRCLE
                    key={title}
                    onClick={() => setPage(index)}
                    inactive={currentPage + 1 <= index}
                />
            ))}
        </Grid>
    );
}

PageSteps.propTypes = {
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
    array: PropTypes.array,
};