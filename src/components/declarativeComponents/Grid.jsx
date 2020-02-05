import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MediaMedium, MediaSmall } from '../helpers/mediaQueries';

const masterGrid = (childSpacing, stringStyle) => `
	max-width: 1920px;
	margin: auto;
	padding-left: 4.6rem;
	padding-right: 4.6rem;
	${MediaMedium} {
		padding-left: 3rem;
		padding-right: 3rem;
	}
	${MediaSmall} {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
	}
	${childSpacing ? `
		& > * {
			margin-right: ${childSpacing} !important;
		}
		& > *:last-child {
			margin-right: 0 !important;
		}
	`: ''}
	${stringStyle}
`;

export const GRID = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 2%;
	${MediaSmall} {
		grid-template-columns: repeat(6, 1fr);
		& > * {
		grid-column: 1 / span 6 !important;
		margin-bottom: 3rem;
		}
	}
	${({ childSpacing, stringStyle }) => masterGrid(childSpacing, stringStyle)}
`;

export const FLEX_GRID = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	${MediaSmall} {
		& > * {
			width: 100%
		}
	}
	${({ childSpacing, stringStyle }) => masterGrid(childSpacing, stringStyle)}
`;

export const NAKED_FLEX_GRID = styled.div`
	display: flex;
	width: auto;
	flex-direction: ${({ direction }) => direction || 'row'};
	${({ childSpacing }) =>
		(childSpacing ? `
		& > * {
			margin-right: ${childSpacing} !important;
		}
		& > *:last-child {
			margin-right: 0 !important;
		}
	`: '')}
	${({ stringStyle }) => (stringStyle)}
`;

export const NAKED_DIV = styled.div`
	${({ stringStyle }) => (stringStyle)}
`;

export function Grid({ type, children, ...other }) {
	switch (type) {
		case 'grid':
			return (
				<GRID {...other}>
					{children}
				</GRID>
			)
		case 'flex':
			return (
				<FLEX_GRID {...other}>
					{children}
				</FLEX_GRID>
			)
		case 'naked-flex':
			return (
				<NAKED_FLEX_GRID {...other}>
					{children}
				</NAKED_FLEX_GRID>
			)
		case 'div':
			return (
				<NAKED_DIV {...other}>
					{children}
				</NAKED_DIV>
			)
		default:
			return null;
	}
}

Grid.defaultProps = {
	type: 'grid',
	stringStyle: '',
	childSpacing: '',
};

Grid.propTypes = {
	type: PropTypes.oneOf(['grid', 'flex', 'naked-flex']),
};