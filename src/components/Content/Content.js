import React from 'react';
import { Profile } from './Profile';
import { Photos } from './Photos';

export const Content = () => {
    return (
        <div className = 'content'>
            <Profile />
            <Photos />
        </div>
    );
};
