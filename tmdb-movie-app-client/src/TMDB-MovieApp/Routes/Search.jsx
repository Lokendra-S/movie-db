import React from 'react';

import SearchMovie from '../Screens/Components/SearchMovie';
import { useLocation, useSearchParams } from 'react-router-dom'
function SearchRoute({ windowWidth }) {

    const [searchParams] = useSearchParams()
    return (
        <div className={`col movieContainer
            ${ 
                windowWidth < 992 ? 'col-12' : (992 < windowWidth && windowWidth< 1200) ?
                'col-9' : 'col-7' 
            }
        `}>
            <SearchMovie 
                windowWidth = { windowWidth } 
                name = {searchParams.get('get') === null ? 'movie' : searchParams.get('get')} 
                movie_name = {searchParams.get('movie')} 
            />
        </div>
    )
}

export default SearchRoute;
