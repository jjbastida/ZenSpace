import React from "react";
import { TypedContent, PageHelm, Grid } from "../components/declarativeComponents";
import { CARD } from "../components/declarativeComponents/Card";
import { Input } from "../components/declarativeComponents/Input";
import { Media4KUp, MediaLarge, MediaMedium, MediaSmall } from "../components/helpers/mediaQueries";

export function SignUp({ pageData }) {
    return (
        <Grid
            type='grid'
            stringstyle={`
                padding: 7rem 0;
            `}
        >
            <CARD
                stringstyle={`
                    grid-column: 4 / span 6;
                    ${Media4KUp} {
                        grid-column: 5 / span 4;
                    }
				`}
            >
                <Grid
                    type='form'
                    stringstyle={`
                    flex-wrap: wrap;
					& > * {
                        width: 100%;
                        margin-bottom: 2rem !important;
                    }
					& > *:last-child {
                        margin-bottom: 0;
                    }
                    ${MediaSmall} {
                        padding: 0 1rem;
                    }
				`}
                >
                    <TypedContent
                        type='h2'
                        stringstyle={`
                            font-size: 4rem;
                            ${Media4KUp} {
                                font-size: 4.4rem;
                            }
                            ${MediaLarge} {
                                font-size: 3.6rem;
                            }
                            ${MediaMedium} {
                                font-size: 3.2rem;
                            }
                            ${MediaSmall} {
                                font-size: 3rem;
                                max-width: 52rem;
                            }
                        `}
                    >
                        Sign Up
                    </TypedContent>
                    <Input
                        type='text'
                        placeholder='Enter your preferred name...'
                        label='Nickname'
                    />
                    <Input
                        type='email'
                        placeholder='Enter your email address...'
                        label='Email'
                    />
                    <Input
                        type='password'
                        placeholder='Enter a password...'
                        label='Password'
                    />
                    <Input
                        type='submit'
                        value='Sign Up'
                        bgColor='white'
                        stringstyle='max-width: 33%'
                        labelstringstyle='margin-bottom: 3rem'
                    />
                    <TypedContent type='body2'>
                        By pressing sign up you are agreeing to the Terms &amp; Conditions and the secure storage and encryption of your user information.
                    </TypedContent>
                </Grid>
            </CARD>
        </Grid>
    );
}
