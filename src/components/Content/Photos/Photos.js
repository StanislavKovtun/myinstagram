import React from 'react';
import images from '../../../data/images.json';
import { Photo } from './Photo';

export const Photos = () => {
    const imagesJSX = images.map((image) => {
        return (
            <Photo
                key = { image.id }
                src = { image.src }
                text = { image.text } />
        );
    });

    return (
        <div className = 'photos'>
            { imagesJSX }
        </div>
    );
};

