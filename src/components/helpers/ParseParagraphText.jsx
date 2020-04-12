import React from 'react';
import { TypedContent } from '../declarativeComponents';

export function ParseParagraphText({ content }) {
    let contentArray = content && content.split('\n');

    return (<>
        {Array.isArray(contentArray) ? contentArray.map((textContent, index) => (
            <TypedContent type='h4' stringstyle='margin-bottom: 0.8em;' key={index}>
                {textContent.match(/~(.*?)~/g)
                    ? (<>{textContent.split('~')[0]}<strong>{textContent.split('~')[1]}</strong></>)
                    : textContent.match(/^(.*?)^/g)
                        ? (<>{textContent.split('^')[0]}<em>{textContent.split('^')[1]}</em></>)
                        : textContent}
            </TypedContent>)
        ) : null}
    </>);
}