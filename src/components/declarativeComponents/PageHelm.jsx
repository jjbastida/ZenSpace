import React from 'react';
import Helmet from 'react-helmet';

export function PageHelm({ pageData }) {
      return (
            <Helmet>
                  <title>{pageData.forceTitle || `${pageData.title} | Zenspace`}</title>
                  <meta name='description' content={pageData.description} />
            </Helmet>
      )
}
