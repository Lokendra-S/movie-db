import React,{useContext} from 'react';

import Avatar from '../../Assets/Avatar.jpg'
import { MovieContext } from '../../Context/MainContext'

function ProfileCardProfile() {
    const  { user } = useContext(MovieContext)
    return(
        <div className="profilePage profileContainer">
            <div className="profile">
                <img src={Avatar} alt="" />
            </div>
            <div className="profileInfo">
                <div className="persona">
                    <h3 className='profileName'>{user ? user.username : ''}</h3>
                    <p className="profileEmail">Lorem, ipsum@gmail.com</p>
                </div>
                <div className="timeStamp">
                    <h5 className="time">Watchlist : 125</h5>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardProfile;
