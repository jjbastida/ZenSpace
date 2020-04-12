import React from 'react';
import { Input } from '../declarativeComponents/Input';
import { Grid, TypedContent } from '../declarativeComponents';
import { Media4KUp, MediaMedium } from '../helpers/mediaQueries';
import { useState } from 'react';

export function GoalSetting() {
    const [inputValue, setInputValue] = useState('');
    const [inputValueImprove, setInputValueImprove] = useState('');
    const toggleInput = (event) => setInputValue(event.currentTarget.getAttribute('data-label'));
    const toggleInputImprove = (event) => setInputValueImprove(event.currentTarget.getAttribute('data-label'));

    return (<>
        <Grid type='flex' as='form' stringstyle={`
            flex-direction: column;
            & > div {
                margin-bottom: 2rem;
            }
            & label {
                font-size: 1.8rem;
                line-height: 1.5;
                ${Media4KUp} {
                    font-size: 2rem;
                }
                ${MediaMedium} {
                    font-size: 1.6rem;
                }
            }
        `}
            naked
        >
            <TypedContent type='h4' stringstyle='margin: 2rem 0 1rem;'>
                How did being in your space feel?
            </TypedContent>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Incredible' value={inputValue === 'Incredible'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Lovely' value={inputValue === 'Lovely'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Calm' value={inputValue === 'Calm'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Comforted' value={inputValue === 'Comforted'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Grateful' value={inputValue === 'Grateful'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Fine' value={inputValue === 'Fine'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Safe' value={inputValue === 'Safe'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Weird' value={inputValue === 'Weird'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Discomforted' value={inputValue === 'Discomforted'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Unhappy' value={inputValue === 'Unhappy'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Disparaged' value={inputValue === 'Disparaged'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Overwhelmed' value={inputValue === 'Overwhelmed'} /></div>
            <div><Input onClick={toggleInput} type='radio' name='feeling' label='Distressed' value={inputValue === 'Distressed'} /></div>
            <TypedContent type='h4' stringstyle='margin: 2rem 0 1rem;'>
                What about your space made you feel the way you did?
            </TypedContent>
            <Input
                type='text'
                placeholder='Write how you feel...'
            />
            <TypedContent type='h4' stringstyle='margin: 2rem 0 1rem;'>
                With that in mind, how can we improve the space?
            </TypedContent>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Get things in order' value={inputValueImprove === 'Get things in order'} /></div>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Remove items that may no longer be relevant' value={inputValueImprove === 'Remove items that may no longer be relevant'} /></div>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Clean up some of the mess' value={inputValueImprove === 'Clean up some of the mess'} /></div>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Appreciate the room' value={inputValueImprove === 'Appreciate the room'} /></div>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Appreciate the objects in that room' value={inputValueImprove === 'Appreciate the objects in that room'} /></div>
            <div><Input onClick={toggleInputImprove} type='radio' name='improve' label='Balance out the living space a bit more' value={inputValueImprove === 'Balance out the living space a bit more'} /></div>
        </Grid >
    </>);
}
