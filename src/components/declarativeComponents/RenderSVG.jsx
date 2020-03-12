import React from 'react';
import PropTypes from 'prop-types';
import { ReactSvgInjector } from 'react-svg-injector';
import styled from 'styled-components';

const INJECTOR = styled(ReactSvgInjector)`
    height: 1em;
    width: 1em;
    vertical-align: middle;
    ${({ stringstyle }) => (stringstyle)};
`;

export function RenderSVG({ src, ...other }) {
    return <INJECTOR src={src} {...other} />
}

RenderSVG.defaultProps = {
    stringstyle: '',
};

RenderSVG.propTypes = {
    stringstyle: PropTypes.string,
};