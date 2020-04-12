import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MediaMedium, MediaSmall } from '../helpers/mediaQueries';

const childSpacingStyles = (childSpacing) => (`
	& > * {
		margin-right: ${childSpacing} !important;
	}
	& > *:last-child {
		margin-right: 0 !important;
	}
`);
const masterGrid = (childSpacing, stringstyle) => `
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
	${childSpacing ? childSpacingStyles(childSpacing) : ''}
	${stringstyle}
`;

export const GRID = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 0 2%;
	${({ childrenSize }) => (childrenSize ? `
	& > * {
			grid-column: auto / span ${childrenSize};
	}
	`: '')}
	${MediaSmall} {
		grid-template-columns: repeat(6, 1fr);
		& > * {
			grid-column: 1 / span 6!important;
			margin-bottom: 3rem;
		}
	}
	${ ({ naked, childSpacing, stringstyle }) => (!naked ? masterGrid(childSpacing, stringstyle) : stringstyle + childSpacingStyles(childSpacing))}
`;

export const FLEX_GRID = styled.div`
	display: flex;
	flex-direction: ${ ({ direction }) => direction || 'row'};
	${MediaSmall} {
			& > * {
				width: 100%
			}
	}
	${ ({ naked, childSpacing, stringstyle }) => (!naked ? masterGrid(childSpacing, stringstyle) : stringstyle + childSpacingStyles(childSpacing))}
`;

export const NAKED_DIV = styled.div`
	${ ({ stringstyle }) => (stringstyle)}
`;

export function Grid({ type, children, naked, ...other }) {
	switch (type) {
		case 'grid':
			return (
				<GRID
					naked={naked}
					{...other}
				>
					{children}
				</GRID>
			)
		case 'flex':
			return (
				<FLEX_GRID
					naked={naked}
					{...other}
				>
					{children}
				</FLEX_GRID>
			)
		case 'form':
			return (
				<FLEX_GRID
					as='form'
					naked={naked}
					{...other}
				>
					{children}
				</FLEX_GRID>
			)
		case 'div':
			return (
				<NAKED_DIV
					naked={naked}
					{...other}
				>
					{children}
				</NAKED_DIV>
			)
		default:
			return null;
	}
}

Grid.defaultProps = {
	type: 'grid',
	naked: false,
	stringstyle: '',
	childSpacing: '',
};

Grid.propTypes = {
	type: PropTypes.oneOf(['grid', 'flex', 'div', 'form']),
	naked: PropTypes.bool,
	stringstyle: PropTypes.string,
	childSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	childrenSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};