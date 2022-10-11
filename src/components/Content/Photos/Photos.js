import React, { useEffect, useState } from 'react';
import images from '../../../data/images.json';
import { Photo } from './Photo';

let iterations = 0;
const maxRepeat = 3;

export const Photos = () => {
    const [photos, setPhotos] = useState(images);
    useEffect(() => {
        if (iterations < maxRepeat) {
            setTimeout(() => {
                iterations += 1;
                setPhotos(() => {
                    return [
                        {
                            id:     Date.now(),
                            src:    'http://placebeard.it/g/640x640',
                            // src:    'https://source.unsplash.com/640x640.png?cat',
                            public: true,
                        },
                        ...photos,
                    ];
                });
            }, 5000);
        }
    }, [photos]);

    const imagesJSX = photos.map((image) => {
        return (
            <Photo
                key = { image.id }
                src = { image.src }
                text = { image.text }
                public = { image.public } />
        );
    });

    return (
        <div className = 'photos'>
            { imagesJSX }
        </div>
    );
};

