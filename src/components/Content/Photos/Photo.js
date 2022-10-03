import React from 'react';

export const Photo = (props) => {
    return (
        <div className = 'photo'>
            <img
                src = { props.src }
                alt = { props.text }>
            </img>
        </div>
    );
};
