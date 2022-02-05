import React,{ useEffect,useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Carousel } from 'react-bootstrap'
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri'
import {useSearchParams} from 'react-router-dom'

import Avatar from '../Assets/Avatar.jpg'
import Avengers from '../Assets/Avengers.png'
import './Navbar.css'
import { useContext } from 'react';
import { MovieContext } from '../Context/MainContext';
import SearchComponent from './Components/SearchComponent.search';

function MovieDetails({windowWidth,name,type }) {
    const [saerchParams] = useSearchParams()
    const { updateMovieId,singleMovie,singleMovieReview,singleMovieCast,singleMovieId } = useContext(MovieContext)
    useEffect(() => {
        updateMovieId(type,name)
    },[])

    return (
        <>
            <div className="searchZComp">
                <SearchComponent display={false}/>
            </div>
            { singleMovie && singleMovieCast && singleMovieReview &&
            <>
                <Carousel >
                    <Carousel.Item>
                        <div className={windowWidth > 600 ? "Image" : "Image"}>
                            <img
                            className="d-block w-100 h-80 singleMovieCarouselImage carouselImage"
                            src={`https://image.tmdb.org/t/p/w185/${singleMovie.backdrop_path}`}
                            alt="backdrop"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="singleMovieCardComponent">
                    <div className="card">
                        <div className="movieImage">
                            <img 
                                src={`https://image.tmdb.org/t/p/w185/${singleMovie.poster_path}`}
                                alt="poster" 
                            />
                        </div>
                        <div className="movieBody">
                            <div className="movieWrapper">
                                <h3 className='movieName'>{ type === 'movie' ? singleMovie.title : singleMovie.name }</h3>
                                <h5 className='movieRating'>{singleMovie.vote_average}</h5>
                            </div>
                            <p className='movieGenre'>
                                {singleMovie.genres.map((ele)=>{
                                    return ele.name + ","
                                })}
                            </p>
                            <h4 className='movieDesc'>
                                {singleMovie.overview}
                            </h4>
                            <div className="buttonsContainer">
                                <button className="addToWatchList">WatchList</button>
                                <button className="addToFavourites">Favourite</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="castAndCrew">
                    <h3 className="castCrew">Cast and Crew</h3>
                    <OwlCarousel 
                    className={`${windowWidth > 600 ? 'owl-theme' : 'owl-theme-responsive' }`} 
                    items={windowWidth > 580 ? ( windowWidth >= 992 ? 7 : 6 ) : ( windowWidth < 425 ? 4 : 4 ) } 
                    margin={10} 
                    autoplayHoverPause={true} 
                    autoplaySpeed={2200}
                    autoplayTimeout={2200}
                    >
                        { singleMovieCast[0] && singleMovieCast[0].map((ele) => {
                            return(
                                <div className='item' key={ele.cast_id} >
                                    <div className="castImage">
                                        <img src={`https://image.tmdb.org/t/p/w185/${ele.profile_path}`} alt="" />
                                    </div>
                                    <p className="castName">{ele.name}</p>
                                </div>
                            )
                        }) }
                    </OwlCarousel>
                </div>
                <div className="reviewsAndRating">
                    <h3 className="reviewHeader">Review</h3>
                    { singleMovieReview[0] &&  
                        (singleMovieReview[0].length === 0 ? <h1 className="text-center">No reviews yet</h1> :
                        singleMovieReview[0].map((ele) => {
                            return(
                                <div className="mainReviewContainer"id key={ele.id}>
                                    <div className="profileContainer">
                                        <div className="profile">
                                            <img src={`https://secure.gravatar.com/avatar/${ele.avatar_path}?s=64`} alt="Profile" />
                                        </div>
                                        <div className="profileInfo">
                                            <div className="persona">
                                                <h3 className='profileName'>{ele.author}{singleMovieReview[0].length}</h3>
                                                <p className="profileEmail">{ele.author_details.username}</p>
                                            </div>
                                            <div className="timeStamp">
                                                <h5 className="time">Created at: {ele.created_at}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ratingContainer">
                                        <h3 className="ratingText">Rating : {ele.author_details.rating}</h3>
                                        <p className="reviewText">
                                            {ele.content}
                                        </p>
                                    </div>
                                </div>
                            )
                        }) )
                    }
                </div>
            </>
            }
        </>
    )
}

export default MovieDetails;
