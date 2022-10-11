import React from 'react';
import avatar from '../../../theme/assets/images/avatar.jpg';
import accountData from '../../../data/accountData.json';
import { Stories } from './Stories';

export const Profile = () => {
    return (
        <div className = 'profile'>
            <img className = 'avatar' src = { avatar }></img>
            <div className = 'main'>
                <span className = 'nickname'>
                    { accountData.nickname }
                </span>
                <div className = 'stats'>
                    <div>
                        <span>{ accountData.postsStat }&nbsp;</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span>{ accountData.followersStat }&nbsp;</span>
                        <span>followers</span>
                    </div>
                    <div>
                        <span>{ accountData.followingStat }&nbsp;</span>
                        <span>following</span>
                    </div>
                </div>
                <div>This is my pet project on react</div>
            </div>
            <Stories />
        </div>
    );
};
