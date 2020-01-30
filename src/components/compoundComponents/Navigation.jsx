import React from 'react';
import { Grid } from '../singularComponents/Grid';
import { Button } from '../singularComponents/Button';

export function Navigation() {
      return (
            <Grid type='flex' stringStyle={`
                  align-items: flex-start;
                  justify-content: space-between;
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  box-shadow: 0px 4px 7px rgba(215, 132, 38, 0.2);
            `}>
                  <div></div>
                  <Grid
                        type='naked-flex'
                        childSpacing='2rem'
                  >
                        <Button href='/login' type='outlined'> Login </Button>
                        <Button href='/sign-up' type='filled'> Sign Up </Button>
                  </Grid>
            </Grid>
      )
}
