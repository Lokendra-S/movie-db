import React from 'react';

import WatchAndFav from '../Screens/WatchAndFav';
function Watchlist({ windowWidth }) {
    return (
        <div className={`col tableCol
            ${ 
                windowWidth < 992 ? 'col-12' : (992 < windowWidth && windowWidth< 1200) ?
                'col-9' : 'col-3'
            }
            `} 
        >
            <WatchAndFav windowWidth = { windowWidth }/>
        </div>
    )
}

export default Watchlist;
