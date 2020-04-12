import React from 'react';
import { PageHelm, Grid, TypedContent, Image } from '../components/declarativeComponents';
const pageData = {
      forceTitle: "Not Found",
      description: "I'm sorry, that address could not be found."
};
export function NotFound() {
      return (
            <Grid
                  stringstyle={`
                  padding-top: 10rem;
                  padding-bottom: 8rem;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
            `}
                  type='flex'
            >
                  <PageHelm pageData={pageData} />
                  <Image
                        stringstyle={`
					max-width: 30%;
				`}
                        src={'https://via.placeholder.com/300'}
                  />
                  <TypedContent
                        type='h1'
                        stringstyle={`
                              margin-top: 2rem;
				`}
                  >
                        404 NotFound
                  </TypedContent>
            </Grid>
      )
}
