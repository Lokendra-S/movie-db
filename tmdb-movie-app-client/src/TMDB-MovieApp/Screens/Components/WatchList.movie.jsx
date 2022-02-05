import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import '../Navbar.css'
import Avatar from '../../Assets/Avatar.jpg'

function WatchlistMovie({windowWidth,name}) {
    return(
        <>
            <div className='carouselHeader'>
                <h3 className='category'>{name}</h3>
                <a href='/profile' className='btn btn-dark seeMore'>See more</a>
            </div>
            <OwlCarousel 
                className={`${windowWidth > 581 ? 'owl-theme' : 'owl-theme-responsive-test' }`} 
                items={windowWidth > 580 ? ( windowWidth > 992 ? ( windowWidth > 1200 ? 2 : 3 ) : 3 ) : ( windowWidth <= 450 ? 2 : 3 ) } 
                margin={10} 
                mouseDrag = {windowWidth < 451 ? false : true}
                touchDrag = {windowWidth < 451 ? false : true}
            >
                <div className='item' >
                    <div className="movieImage" >
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Rating: 8.7</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="movieImage">
                        <img src={Avatar} alt=''/>
                    </div>
                    <div className="movieBody">
                        <h3 className="movieName">Avatar</h3>
                        <p className="movieGenre">Fantasy,Adventure</p>
                        <p className="movieRatings">Endorsed by 10002</p>
                    </div>
                </div>
            </OwlCarousel>
        </>
    )
}

export default WatchlistMovie;
