import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { RiMovie2Line,RiHomeLine,RiMovieLine } from 'react-icons/ri'
import { BiMovie,BiLogOut,BiLogIn } from 'react-icons/bi'
import { AiOutlineFire } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import  { Navbar, Nav } from 'react-bootstrap'
import { IconContext } from 'react-icons';

import './Navbar.css'
import { MovieContext } from '../Context/MainContext'

function NavbarTemplate({ windowWidth }) {

    const { user,login } = useContext(MovieContext)

    return (
        <>
            <Navbar expand="lg" className={`d-block navBar `}>
                <div className={`${windowWidth > 600 ? 'navBarBrand' : 'navBarBrandResponsive'}`}>
                    <Navbar.Brand className='brandName' href="#home">
                    <IconContext.Provider value={{className:"movieIcon"}}>
                        <RiMovie2Line/>  
                    </IconContext.Provider>
                    <span>MOVIES</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='float-end toggleIcon' />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant='pills' defaultActiveKey="/home" className="flex-column">
                        <h5 className='menuHeader'>MENU</h5>
                        <Nav.Link href='/' className=''>
                            <IconContext.Provider value={{className:"navIcon"}}>
                                <RiHomeLine/>
                            </IconContext.Provider>
                            Home
                        </Nav.Link>
                        <Nav.Link href='/search?get=movie' className=''>
                            <IconContext.Provider value={{className:"navIcon"}}>
                                <BiMovie/>
                            </IconContext.Provider>
                            Movies
                        </Nav.Link>
                        <Nav.Link href='/search?get=tv' className=''>
                            <IconContext.Provider value={{className:"navIcon"}}>
                                <RiMovieLine/>
                            </IconContext.Provider>
                            Tv Shows
                        </Nav.Link>
                        <Nav.Link href='/search?get=artist' className=''>
                            <IconContext.Provider value={{className:"navIcon"}}>
                                <AiOutlineFire/>
                            </IconContext.Provider>
                            Artists
                        </Nav.Link>
                        <hr />
{/*                        <h5 className='menuHeader'>PROFILE</h5>
                        {user === null ? 
                            <Nav.Link href='/login' eventKey="link-7" className=''>
                                <IconContext.Provider value={{className:"navIcon"}}>
                                    <BiLogIn/>
                                </IconContext.Provider>
                                Login
                            </Nav.Link>
                                :
                            <>
                                <Nav.Link href='/profile' className=''>
                                    <IconContext.Provider value={{className:"navIcon"}}>
                                        <CgProfile/>
                                    </IconContext.Provider>
                                    Profile
                                </Nav.Link>
                                <Nav.Link eventKey="link-7" className=''>
                                    <IconContext.Provider value={{className:"navIcon"}}>
                                        <BiLogOut/>
                                    </IconContext.Provider>
                                    Logout
                                </Nav.Link>
                            </>
                        }
                        <hr />*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarTemplate;
