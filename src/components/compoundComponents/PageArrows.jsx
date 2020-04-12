import React from 'react';
import PropTypes from 'prop-types';
import { TypedContent } from '../declarativeComponents';
import { faChevronRight, faChevronLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Media4KUp, MediaLarge, MediaSmall } from '../helpers/mediaQueries';
import { enterKeyIsPressed } from '../helpers/keydown';

const ICON_BUTTON = styled.button`
    display: block;
    position: fixed;
	padding: 1.4rem;
	margin: 0;
	font-weight:500;
    height: 5rem !important;
    width: 5rem !important;
    white-space: nowrap;
    z-index: 1;
	background: none;
	border: none;
	font-size: 1.8rem;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    border-radius: 100rem;
    background-color: #FFFFFF !important;
    border: 1px solid ${({ theme }) => theme.textPrimary};
    transition: color ease 400ms, border ease 400ms, background-color ease 400ms, transform ease 400ms, box-shadow ease 400ms;
    ${({ disabled }) => disabled ? `
        color: #FFFFFF !important;
        transform: none !important;
        background-color: #CCCCDD !important;
        border-color: #CCCCDD !important;
        cursor: default !important;
        box-shadow: none !important;
    ` : ''}
	${Media4KUp} {
        font-size: 2rem;
        padding: 1.6rem;
	}
	${MediaLarge} {
		font-size: 1.4rem;
	}
	${MediaSmall} {
        font-size: 1.6rem;
        padding: 2rem;
    }
    &:focus {
        outline: none;
    }
    &:active {
        transition-duration: 200ms;
    }
    & > svg {
        color: ${({ theme }) => theme.textPrimary};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ${({ stringstyle }) => stringstyle}
`;

export function PageArrows({ currentPage, setPage, arrayLength, continueText, continueLink }) {
    const nextPage = () => currentPage <= arrayLength - 1 && setPage(currentPage + 1);
    const previousPage = () => currentPage >= 0 && setPage(currentPage - 1);
    const isLastPage = currentPage === arrayLength - 1;
    const pageArrowsStyle = `
        top: 50%;
        transform: translateY(-50%);
        ${MediaSmall} {
            top: auto;
            bottom: 3rem;
            transform: none;
        }
    `;

    return (<>
        {currentPage > 0 ? (
            <ICON_BUTTON
                aria-label='View previous section.'
                onClick={previousPage}
                onKeyDown={(event) => enterKeyIsPressed(event) && previousPage()}
                stringstyle={`
                ${pageArrowsStyle}
                left: 2rem;
            `}
            >
                <FontAwesomeIcon icon={faChevronLeft} alt='forward' />
            </ICON_BUTTON>
        ) : null
        }
        <ICON_BUTTON
            href={isLastPage ? continueLink : ''}
            aria-label={isLastPage ? continueText : 'View next section.'}
            onClick={() => !isLastPage && nextPage()}
            onKeyDown={(event) => !isLastPage && enterKeyIsPressed(event) && nextPage()}
            as={isLastPage ? 'a' : 'button'}
            stringstyle={`
                    ${pageArrowsStyle}
                    right: 2rem;
                    ${isLastPage ? `
                        height: auto !important;
                        width: auto !important;
                        border-radius: 1rem;
                        & > svg {
                            margin-left: 1rem;
                            position: static !important;
                            display: inline !important;
                            top: auto !important;
                            left: auto !important;
                            transform: none !important;
                        }
                    ` : ''}
                `}
        >
            {isLastPage ? (
                <TypedContent type='p2' stringstyle='font-weight: 600; display: inline'>
                    {continueText}
                </TypedContent>
            ) : null}

            <FontAwesomeIcon icon={faChevronRight} alt='back' />
        </ICON_BUTTON>
    </>
    );
}

PageArrows.propTypes = {
    currentPage: PropTypes.number,
    setPage: PropTypes.func,
    arrayLength: PropTypes.number,
    continueText: PropTypes.string,
    continueLink: PropTypes.string
};