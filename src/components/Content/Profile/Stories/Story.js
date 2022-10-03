import React from 'react';

export const Story = (props) => {
    return (
        <div className = 'story'>
            <div>
                <img src = { props.src }></img>
            </div>
            <span>{ props.message }</span>
        </div>
    );
};
