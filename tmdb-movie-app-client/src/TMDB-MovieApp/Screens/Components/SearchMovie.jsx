import React,{ useContext,useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { MovieContext } from '../../Context/MainContext';
import SearchComponent from './SearchComponent.search';

function SearchMovie({ name,movie_name }) {

    const { 
        movie,
        tv,
        artist,
        searchMovie,
        pageInc,
        pageDec,
        searchParam,
        search,
        updateMovieId
    } = useContext(MovieContext)

    const newArr = {
        "movie":movie,
        "tv":tv,
        "artist":artist,
        "searchMovie":searchMovie
    }
    
    const queryResult = Object.keys(newArr).filter((e) => {
        if ( e === name ){
            return e
        }
    })
    const query = newArr[queryResult[0]]

    useEffect(() => {
        if( searchParam !== null && searchParam.length<1){
            search(movie_name)
        }
    },[searchParam])

    const HandleCardClick = (e) => {
        updateMovieId(e.currentTarget.getAttribute("data-uid"),queryResult === 'searchMovie'?'movie':queryResult)
    }

    return(
        <>
            <div className="searchZComp">
                <SearchComponent display={false}/>
            </div>
            <div className="searchMoviesContainer">
                { query[0] && query[0].map((ele,index)=>{
                    return(
                        <>
                        <Link to={ name === 'artist' ? '/' : `/${name === "searchMovie" ? 'movie' : queryResult}?type=${name === "searchMovie" ? 'movie' : queryResult}&Id=${ele.id}` } key={ele.id}>
                            <Card className = "card searchCard" data-uid={ele.id} onClick={(e) => HandleCardClick(e)}>
                                <div className='movieImageSearch'>
                                    <Card.Img variant="top" 
                                        src={`https://image.tmdb.org/t/p/w185/${name === 'artist' ? ele.profile_path :ele.poster_path}`} 
                                        alt='Poster not avaialble'
                                    />
                                </div>
                                <Card.Body className='movieBody'>
                                    <Card.Title className = 'cardTitle'>{name === 'tv' || name === 'artist' ? ele.name : ele.title}</Card.Title>
                                    <Card.Text className='cardTextGenre'>
                                        { name === 'artist' ? (ele.gender === 2 ? "Male" : "Female") : `Fantasy,Adventure ${ele.genre_ids}`}
                                    </Card.Text>
                                    <Card.Text className='cardTextReview'>
                                        Endorsed by { name === 'artist' ? ele.popularity :ele.vote_count}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                        </>
                    )
                }) }
            </div>
            {query[0] && <div className="nextAndPrev">
                <button className="btn btn-dark btn-prev" onClick={pageDec}>Previous</button>
                <button className="btn btn-dark btn-prev" onClick={pageInc}>Next</button>
            </div>}
        </>
    )
}

export default SearchMovie;
