import React,{ useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'

import { MovieContext } from '../Context/MainContext';

function OwlCarouselContainer({windowWidth}) {

    const { popularMovies,popularTvshows,popularArtists } = useContext(MovieContext)

  return (
      <>
      {
        popularMovies[0] && popularTvshows[0] && popularArtists[0] ?
            <>
                <div className='carouselHeader'>
                    <h3 className='category'>Movies</h3>
                    <a href={`/search?get=movie`} className='btn btn-dark seeMore'>See more</a>
                </div>
                <OwlCarousel 
                    className={`${windowWidth > 580 ? 'owl-theme' : 'owl-theme-responsive' }`} 
                    items={windowWidth > 580 ? ( windowWidth > 992 ? 4 :3 ) : ( windowWidth < 451 ? 2 : 3 ) } 
                    margin={10} 
                    autoplayHoverPause={true} 
                    autoplaySpeed={2200}
                    autoplayTimeout={2200}
                >
                    {
                        popularMovies[0].map((ele)=>{
                            return(
                                <Link to={`/movie?type=movie&Id=${ele.id}` } key={ele.id}>
                                    <div className='item' >
                                        <div className="movieImage" >
                                            <img src={`https://image.tmdb.org/t/p/w185/${ele.poster_path}`} alt=''/>
                                        </div>
                                        <div className="movieBody">
                                            <h3 className="movieName">{ele.title}</h3>
                                            <p className="movieGenre">{ele.release_date}</p>
                                            <p className="movieRatings">Endorsed by {ele.vote_count}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </OwlCarousel>
                <div className='carouselHeader'>
                    <h3 className='category'>Tv Shows</h3>
                    <a href='/search?get=tv' className='btn btn-dark seeMore'>See more</a>
                </div>
                <OwlCarousel 
                    className={`${windowWidth > 580 ? 'owl-theme' : 'owl-theme-responsive' }`} 
                    items={windowWidth > 580 ? ( windowWidth > 992 ? 4 :3 ) : ( windowWidth < 451 ? 2 : 3 ) } 
                    margin={10} 
                    autoplayHoverPause={true} 
                    autoplaySpeed={2200}
                    autoplayTimeout={2200}
                >
                    {
                        popularTvshows[0].map((ele)=>{
                            return(
                                
                                <Link to={`/tv?type=tv&Id=${ele.id}` } key={ele.id}>
                                    <div className='item' key={ele.id} >
                                        <div className="movieImage" >
                                            <img src={`https://image.tmdb.org/t/p/w185/${ele.poster_path}`} alt=''/>
                                        </div>
                                        <div className="movieBody">
                                            <h3 className="movieName">{ele.name}</h3>
                                            <p className="movieGenre">{ele.first_air_date}</p>
                                            <p className="movieRatings">Endorsed by {ele.vote_count}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </OwlCarousel>
                <div className='carouselHeader'>
                    <h3 className='category'>Popular Artists</h3>
                    <a href='/search?get=artist' className='btn btn-dark seeMore'>See more</a>
                </div>
                <OwlCarousel 
                    className={`${windowWidth > 580 ? 'owl-theme' : 'owl-theme-responsive' }`} 
                    items={windowWidth > 580 ? ( windowWidth > 992 ? 4 :3 ) : ( windowWidth < 451 ? 2 : 3 ) } 
                    margin={10} 
                    autoplayHoverPause={true} 
                    autoplaySpeed={2200}
                    autoplayTimeout={2200}
                >
                    {
                        popularArtists[0].map((ele)=>{
                            return(
                                <div className='item' key={ele.id} >
                                    <div className="movieImage" >
                                        <img src={`https://image.tmdb.org/t/p/w185/${ele.profile_path}`} alt=''/>
                                    </div>
                                    <div className="movieBody">
                                        <h3 className="movieName">{ele.name}</h3>
                                        <p className="movieGenre">{ele.gender === 2 ? "Male" : "Female"}</p>
                                        <p className="movieRatings">Popularity {ele.popularity}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel> 
            </>: ''
      }
      </>
  );
}

export default OwlCarouselContainer;
