import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './Screens/Navbar.css'
import NavContainer from './Routes/NavContainer';
import Movie from './Routes/Movie';
import SingleMovie from './Routes/SingleMovie';
import LoginRoute from './Routes/Login';
import SignupRoute from './Routes/Signup';
import Watchlist from './Routes/Watchlist';
import SearchRoute from './Routes/Search';
import ProfileComponent from './Routes/Profile'
import { MovieContextProvider } from './Context/MainContext';

function Home() {

    const HandleResize = (e) => {
        setWinWidth(window.innerWidth)
    }
    
    useEffect(()=>{
        window.addEventListener('resize',HandleResize)
    },[])
    
    const [ winWidth, setWinWidth ] = useState(window.innerWidth)

    return (
        <>
        <MovieContextProvider>
            <div className="row container-fluid">
                { window.location && window.location.pathname === '/signup' ?  '' : 
                    (window.location.pathname === '/login' ? '' :  <NavContainer windowWidth={winWidth}/>)
                }
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={ <Movie windowWidth={winWidth}/> } />
                        <Route path={'/:query'} element={ <SingleMovie windowWidth={winWidth}/> } />
                        <Route path='/login' element={ <LoginRoute windowWidth={winWidth}/> } />
                        <Route path='/signup' element={ <SignupRoute windowWidth={winWidth}/> } />
                        <Route path='/search' element={ <SearchRoute windowWidth={winWidth}/> } />
                        <Route path='/profile' element={ <ProfileComponent windowWidth={winWidth}/> } />
                        <Route path='*' element={ <LoginRoute windowWidth={winWidth}/> } />
                    </Routes>
                </BrowserRouter>
                { window.location.pathname === '/signup' ? '' : 
                    (window.location.pathname === '/login' ? '' :  
                    (window.location.pathname === '/profile' ? '' :  
                    <Watchlist windowWidth={winWidth}/>))
                }
            </div>
        </MovieContextProvider>
        </>
    );
}

export default Home;
