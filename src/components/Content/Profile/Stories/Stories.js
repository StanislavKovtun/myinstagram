import React from 'react';
import stories from '../../../../data/stories.json';
import { Story } from './Story';

export const Stories = () => {
    const storiesJSX = stories.map((story) => {
        return (
            <Story
                key = { story.id }
                src = { story.src }
                message = { story.message } />
        );
    });

    return (
        <div className = 'stories'>{ storiesJSX }</div>
    );
};
