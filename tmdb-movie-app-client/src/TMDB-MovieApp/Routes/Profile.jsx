import React from 'react';

import Profile from '../Screens/Profile';
function ProfileComponent({ windowWidth }) {
    return(
        <div className={`col movieContainer
            ${ windowWidth < 992 ? 'col-12' : 'col-9'}
        `}>
            <Profile windowWidth = { windowWidth } />
        </div>
    )
}

export default ProfileComponent;
