import React from 'react';
import Helmet from 'react-helmet';

export function PageHelm({ pageData }) {
      return pageData ? (
            <Helmet>
                  <title>{pageData.forceTitle || `${pageData.title} | ZenDen`}</title>
                  <meta name='description' content={pageData.description} />
                  <meta property='og:description' content={pageData.description} />
            </Helmet>
      ) : null;
}
