import React from 'react';

import Avatar from '../../Assets/Avatar.jpg'

function WatchlistCardProfile() {
    return(
        <div className="cardContainer">
            <div className="moviePicture">
                <img src={Avatar} alt="" />
            </div>
            <div className="movieContent">
                <div className="movieContentWrapper">
                    <div className="movieWrapper">
                        <h3 className='movieName'>Avatar</h3>
                        <h5 className='movieGenre'>Fantasy,Adventure</h5>
                    </div>
                    <h4 className='movieRating'>Rating : 8.9</h4>
                </div>
                <div className="movieStatus">
                    <button className='changeStatus'>Change Status</button>
                    <h3 className="status">Watching</h3>
                </div>
            </div>
        </div>
    )
}

export default WatchlistCardProfile;
