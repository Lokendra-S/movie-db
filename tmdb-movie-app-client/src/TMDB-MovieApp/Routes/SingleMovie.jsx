import React from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieDetails from '../Screens/MovieDetails';
function SingleMovie({ windowWidth }) {
    const [searchParams] = useSearchParams()
    return (
        <div className={`col movieContainer
            ${ 
                windowWidth < 992 ? 'col-12' : (992 < windowWidth && windowWidth< 1200) ?
                'col-9' : 'col-7' 
            }
        `}>
            <MovieDetails 
                windowWidth = { windowWidth }
                name = { searchParams.get('Id') }
                type = { searchParams.get('type') }
            />
        </div>
    )
}

export default SingleMovie;
