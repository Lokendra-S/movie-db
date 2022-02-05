import React from 'react';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { Navigate,Route } from 'react-router-dom'

export const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {

    //HOME PAGE
    const [ carouselMovies, setCarouselMovies ] = useState([])
    const [ popularMovies, setPopularMovies ] = useState([])
    const [ popularTvshows, setPopularTvshows ] = useState([])
    const [ popularArtists, setPopularArtists ] = useState([])

    //SEARCHMOVIES
    const [ allMovies, setAllMovies ] = useState([])
    const [ allTvShows, setAllTvShows ] = useState([])
    const [ allArtists, setAllArtists ] = useState([])
    const [ searchMovie,setSearchMovie ] = useState([])

    //SINGLEMOVIE
    const [ singleMovie,setSingleMovie ] = useState()
    const [ singleMovieId,setSingleMovieId ] = useState({
        query:'',
        Id : 0
    })
    const [ singleMovieCast,setSingleMovieCast ] = useState([])
    const [ singleMovieReview,setSingleMovieReview ] = useState([])

    //WATCHLIST
    const [ watchlist,setWatchlist ] = useState([])

    //UTILS
    const [ page,setPage ] = useState(1)
    const [ totalPages,setTotalPages ] = useState(0)
    const [ search,setSearch ] = useState('')
    const [ searchTotalPages,setSearchTotalPages ] = useState(0)

    //USER
    const [users, setUser] = useState(null)
    const [login, setLogin] = useState({
        'username' : '',
        'password' : ''
    })
    const [signup, setSignup] = useState({
        'firstname' : '',
        'lastname' : '',
        'username' : '',
        'password' : '',
        'cPassword' : ''
    })
    const [signBool, setSignBool] = useState(false)

    //MOVIES TVSHOWS ARTISTS
    useEffect(async()=>{
        await fetch('http://localhost:4000/popularMoviesAndArtists',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query' : 'movie','page' : page })
        }).then((res) => res.json())
        .then((data)=>{
            setCarouselMovies([data.ReadData.slice(0,3)])
            setAllMovies([data.ReadData])
            setTotalPages(data.totalPages)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[page])
    useEffect(async()=>{
        await fetch('http://localhost:4000/popularMoviesAndArtists',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query' : 'tv','page' : page })
        }).then((res) => res.json())
        .then((data)=>{
            setAllTvShows([data.ReadData])
            setTotalPages(data.totalPages)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[page])
    useEffect(async()=>{
        await fetch('http://localhost:4000/popularMoviesAndArtists',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query' : 'person','page' : page })
        }).then((res) => res.json())
        .then((data)=>{
            setPopularArtists([data.ReadData.slice(0,6)])
            setAllArtists([data.ReadData])
            setTotalPages(data.totalPages)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[page])
    
    //SEARCH
    useEffect(async()=>{
        await fetch('http://localhost:4000/SearchMovie',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'movie' : search,'page' : page })
        }).then((res) => res.json())
        .then((data)=>{
            setSearchMovie([data.searchData])
            setSearchTotalPages(data.totalPages)
            data.searchData[0].genre_ids.forEach(e => {
                console.log(e.name)
            })
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[search,page])

    useEffect(async()=>{
        await fetch('/topRatedMovies',{
            method: "GET"
        }).then((res) => res.json())
        .then((data) => {
            setPopularMovies([data.topRated])
        }).catch((err) => JSON.stringify(err))
    },[])
    useEffect(async()=>{
        await fetch('http://localhost:4000/topRatedMoviesAndTv',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query' : 'tv' })
        }).then((res) => res.json())
        .then((data)=>{
            setPopularTvshows([data.topRated])
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[])

    //SINGLEMOVIE
    useEffect(async()=>{
        await fetch('http://localhost:4000/SingleMovie',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query':singleMovieId.query,'Id' : singleMovieId.Id })
        }).then((res) => res.json())
        .then((data)=>{
            setSingleMovie(data.topRated)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[singleMovieId.query,singleMovieId.Id])
    useEffect(async()=>{
        await fetch('http://localhost:4000/SingleMovieCrew',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query':singleMovieId.query,'Id' : singleMovieId.Id })
        }).then((res) => res.json())
        .then((data)=>{
            setSingleMovieCast([data.topRated])
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[singleMovieId])
    useEffect(async()=>{
        await fetch('http://localhost:4000/SingleMovieRatings',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 'query':singleMovieId.query,'Id' : singleMovieId.Id })
        }).then((res) => res.json())
        .then((data)=>{
            setSingleMovieReview([data.topRated])
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[singleMovieId])

    useEffect(async()=>{
        await fetch('http://localhost:4000/try',{
            method: "GET",
            headers: {'Content-Type':'application/json'},
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[])



    // USER
    const updateLoginDetails = (username,password) => setLogin({
        username : username,
        password : password,
        success : false
    })
    const updateSignupDetails = (firstname,lastname,username,password,cPassword) => 
    setSignup({
        firstname : firstname,
        lastname : lastname,
        username : username,
        password : password,
        cPassword : cPassword,
    })

    useEffect(async()=>{
        await fetch('http://localhost:4000/Login',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
                'username' : login.username,
                'password' : login.password
            })
        }).then((res) => res.json())
        .then((data)=>{
            if(data.login === 'success'){
                setLogin({...login,success:true})
            }
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[login])
    useEffect(async()=>{
        await fetch('http://localhost:4000/signup',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
                'firstname' : signup.firstname,
                'lastname' : signup.lastname,
                'username' : signup.username,
                'password' : signup.password,
                'confirmpassword' : signup.cPassword,
            })
        }).then((res) => res.json())
        .then((data)=>{
            if ( data.signup === 'failed' ){
                console.log(data)
            }
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[signBool])
    useEffect(async()=>{
        await fetch('http://localhost:4000/verify',{
            method: "GET"
        }).then((res) => res.json())
        .then((data)=>{
            // if(user.length>0){
            //     console.log("object")
            // }
            console.log(data)
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        })
    },[])

    const updateMovieId = (query,Id) => setSingleMovieId({
        query : query,
        Id : Id
    })

    const pageInc = () => page < searchTotalPages ? setPage(page+1) : setPage(searchTotalPages)
    const pageDec = () => page > 1 ? setPage(page-1) : setPage(page)

    const changeSearch = (e) => {
        setSearch(e)
    }
    const pageReset = () => setPage(1)

    return(
        <MovieContext.Provider value={{
            popularMovies : popularMovies,
            carouselMovies : carouselMovies,
            popularTvshows : popularTvshows,
            popularArtists : popularArtists,

            movie : allMovies,
            tv : allTvShows,
            artist : allArtists,

            pageInc : pageInc,
            pageDec : pageDec,

            search:changeSearch,
            searchMovie : searchMovie,
            searchParam : search,

            singleMovie : singleMovie,
            updateMovieId : updateMovieId,
            singleMovieCast : singleMovieCast,
            singleMovieReview : singleMovieReview,
            singleMovieId : singleMovieId,


            login : login,
            setLogin : setLogin,
            updateLoginDetails : updateLoginDetails,
            signup : signup,
            setSignup : setSignup,
            updateSignupDetails : updateSignupDetails,
            signBool : signBool,
            setSignBool : setSignBool,


            users:users
        }}>
            {children}
        </MovieContext.Provider>
    )

}

