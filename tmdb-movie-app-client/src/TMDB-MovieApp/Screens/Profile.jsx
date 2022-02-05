import React,{useContext} from 'react';

import ProfileCardProfile from './Components/ProfileCard.profile';
import WatchlistCardProfile from './Components/WatchlistCard.profile';
import { MovieContext } from '../Context/MainContext'

function Profile() {
    const { user } = useContext(MovieContext)
    console.log(user)
    return(
        <>
            <h1 className='profileHeader'>Profile</h1>
            <ProfileCardProfile/>
            <hr />
            <div className="watchListContainer">
                <h1 className='watchlistHeader'>Watchlist</h1>
                <div className="watchlistNavbar">
                    <h3 className='AllMovies'>All</h3>
                    <h3 className='WatchingMovies'>Watching</h3>
                    <h3 className='CompletedMovies'>Completed</h3>
                    <h3 className='DroppedMovies'>Dropped</h3>
                </div>
                <WatchlistCardProfile/>
            </div>
        </>
    )
}

export default Profile;
