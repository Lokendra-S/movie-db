import React, { useState,useContext,useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { RiHeartLine } from 'react-icons/ri'
import { IconContext } from 'react-icons';

import { MovieContext } from '../../Context/MainContext';

function MovieCarousel({ windowWidth }) {

    const { carouselMovies } = useContext(MovieContext)
    
    const [content,setContent] = useState([])
    
    useEffect(()=>{
        setContent([carouselMovies[0]]);
    },[carouselMovies])

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            { content[0] && content[0].map((ele,index) => {
                return(
                    <Carousel.Item key={ele.id}>
                        <div className={windowWidth > 600 ? "Image" : "Image"}>
                            <img
                            className="d-block w-100 h-80 carouselImage"
                            src={`https://image.tmdb.org/t/p/w185/${ele.backdrop_path}`}
                            alt="First slide"
                            />
                        </div>
                        <Carousel.Caption className='carousel-caption'>
                        <h2 className='movieHeading'>{ele.original_title}</h2>
                        <p className='movieGenre'>{ele.genre_ids}</p>
                        <div className="buttons gap-3">
                            <button className='btn btn-primary watchButton'>
                                Watch
                            </button>
                            <button className="btn btn-light favIcon">
                                    <IconContext.Provider value={{className:"navIcon"}}>
                                        <RiHeartLine/>
                                    </IconContext.Provider>
                            </button>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }) }
            </Carousel>
        </>
    );
}

export default MovieCarousel;
