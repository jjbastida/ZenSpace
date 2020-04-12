import React from 'react';
import Helmet from 'react-helmet';

export function PageHelm({ pageData }) {
      const cleanedTitle = pageData && (pageData.forceTitle || `${pageData.title} | ZenDen`);

      return pageData ? (
            <Helmet>
                  <title>{cleanedTitle}</title>
                  <meta name='title' content={cleanedTitle} />
                  <meta name='description' content={pageData.description} />
                  <meta property='og:description' content={pageData.description} />
            </Helmet>
      ) : null;
}
