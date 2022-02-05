import React from 'react';

import NavbarTemplate from '../Screens/Navbar.Movie';

function NavContainer({ windowWidth }) {
    return(
        <div className={`col  navContainer ${ 
            windowWidth < 992 ? 'col-12' : ( 992 < windowWidth && windowWidth< 1200 ? 'col-3' : 'col-2' ) 
        } `}>
            <NavbarTemplate windowWidth = { windowWidth }/>
        </div>
    )
}

export default NavContainer;
