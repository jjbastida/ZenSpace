import React from 'react';
import Helmet from 'react-helmet';

export function PageHelm({pageData}) {
      return (
            <Helmet>
                  <title>{pageData.title}</title>
                  <meta name='description' content={pageData.description}/>
            </Helmet>
      )
}
