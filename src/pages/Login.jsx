import React from "react";
import { TypedContent, PageHelm, Grid } from "../components/declarativeComponents";
import { CARD } from "../components/declarativeComponents/Card";
import { Input } from "../components/declarativeComponents/Input";
import { Media4KUp, MediaLarge, MediaMedium, MediaSmall } from "../components/helpers/mediaQueries";

export function Login({ pageData }) {
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
                        Login
                    </TypedContent>
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
                        value='Login'
                        bgColor='white'
                        stringstyle='max-width: 33%'
                        labelstringstyle='margin-bottom: 3rem'
                    />
                </Grid>
            </CARD>
        </Grid>
    );
}
