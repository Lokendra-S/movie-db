import React from 'react';

import MovieCarousel from './Components/Carousel.movie';
import OwlCarouselContainer from './OwlCarousel';
import SearchComponent from './Components/SearchComponent.search';

function Movies({ windowWidth }) {
  return (
        <>
            <SearchComponent display={true} windowWidth = { windowWidth }/>
            <MovieCarousel windowWidth = { windowWidth }/>
            <OwlCarouselContainer windowWidth = { windowWidth } />
        </>
  );
}

export default Movies;
