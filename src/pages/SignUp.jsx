import React from 'react';
import { namedColors } from '../theme/colours';
import {TypedContent} from '../components/singularComponents/Typography'
import { PageHelm } from '../components/singularComponents/PageHelm';

export function SignUp() {
      const pageData={
		title: 'SignUp',
		description: 'SignUp page.',
	};
      return (
            <>
                  <PageHelm pageData={pageData}/>
                  <TypedContent type='h2'>
                        SignUp
                  </TypedContent>
            </>
      )
}
