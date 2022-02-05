import React,{useContext, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri'
import { IconContext } from 'react-icons';
import  { Link } from 'react-router-dom'

import '../Navbar.css'
import { MovieContext } from '../../Context/MainContext';
function SearchComponent({ windowWidth,display }) {
    const { search } = useContext(MovieContext)

    const [input,setInput] = useState('')

    const onChange = (e) => setInput(e.target.value)
    const HandleClick = () => {
        search(input)
    }
    return (
        <div className={`${windowWidth > 600 ? 'movieNavbar' : 'resposniveMovieNavbar'}`}>
            { display &&
                <div className="navLinks">
                    <h3><Link to='/' className='linkStyle' style={{textDecoration:'none',color:"black"}}>Home</Link></h3>
                    <h3><Link to='/search?get=movie' className='linkStyle' style={{textDecoration:'none',color:"black"}}>Movies</Link></h3>
                    <h3><Link to='/search?get=tv' className='linkStyle' style={{textDecoration:'none',color:"black"}}>Tv Shows</Link></h3>
                </div>
            }
            <div className="searchComponents">
                <input type="text" name="" id="" placeholder='search'
                    value={input}
                    onChange={(e) => onChange(e)}
                />
                <Link to={`/search?get=searchMovie&movie=${input}`}>
                    <button type="submit" className='btn btn-dark searchBtn' onClick={HandleClick}>
                        <IconContext.Provider value={{className:"navIcon"}}>
                            <RiSearchLine/>
                        </IconContext.Provider>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SearchComponent;
