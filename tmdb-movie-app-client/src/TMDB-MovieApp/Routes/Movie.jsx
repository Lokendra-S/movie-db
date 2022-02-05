import React from 'react';

import Movies from '../Screens/Movies';
function Movie({ windowWidth }) {
  return (
    <div className={`col movieContainer
      ${ 
        windowWidth < 992 ? 'col-12' : (992 < windowWidth && windowWidth< 1200) ?
        'col-9' : 'col-7' 
      }
    `}>
      <Movies windowWidth = { windowWidth }/>
    </div>
  )
}

export default Movie;
