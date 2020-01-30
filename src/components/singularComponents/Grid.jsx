import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const GRID = styled.div`
	max-width: 1920px;
	display: grid;
	margin: auto;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 2%;
	padding-left: 4rem;
	padding-right: 4rem;
	@media (max-width: 959.9px) {
	grid-template-columns: repeat(6, 1fr);
	padding-left: 2rem;
	padding-right: 2rem;
	& > * {
				grid-column: 1 / span 12
		}
	}
	${({childSpacing})=>
	(childSpacing ? `
		& > * {
			margin-right: ${childSpacing} !important;
		}
		& > *:last-child {
			margin-right: 0 !important;
		}
	`: '')}
	${({stringStyle}) => (stringStyle)}
`;

export const FLEX_GRID = styled.div`
	max-width: 1920px;
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	padding-left: 4rem;
	padding-right: 4rem;
	@media (max-width: 959.9px) {
	padding-left: 2rem;
	padding-right: 2rem;
		& > * {
			width: 100%
		}
	}
	${({childSpacing})=>
	(childSpacing ? `
		& > * {
			margin-right: ${childSpacing} !important;
		}
		& > *:last-child {
			margin-right: 0 !important;
		}
	`: '')}
	${({stringStyle}) => (stringStyle)}
`;

export const NAKED_FLEX_GRID = styled.div`
	display: flex;
	width: auto;
	flex-direction: ${({ direction }) => direction || 'row'};
	${({childSpacing})=>
	(childSpacing ? `
		& > * {
			margin-right: ${childSpacing} !important;
		}
		& > *:last-child {
			margin-right: 0 !important;
		}
	`: '')}
	${({stringStyle}) => (stringStyle)}
`;

export function Grid({type, children, ...other}) {
      switch (type) {
            case 'container':
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
            default:
                  return null;
      }
}

Grid.defaultProps = {
	  type: 'container',
	  stringStyle: '',
	  childSpacing: '',
};

Grid.propTypes = {
      type: PropTypes.oneOf(['item', 'container']),
};