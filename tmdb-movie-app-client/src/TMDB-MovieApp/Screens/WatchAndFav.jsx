import React from 'react';

import WatchlistMovie from './Components/WatchList.movie';

function WatchAndFav({windowWidth}) {
  return(
      <>
        <WatchlistMovie windowWidth = { windowWidth } name = "WatchList" />
      </>
  )
}

export default WatchAndFav;
