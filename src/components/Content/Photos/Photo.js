import React from 'react';

export const Photo = (props) => {
    return (
        props.public
            ? <div className = 'photo'>
                <img
                    src = { props.src }
                    alt = { props.text }>
                </img>
            </div>
            : null
    );
};
