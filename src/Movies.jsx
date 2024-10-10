import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    const movies = props.movies;
    console.log(movies);
    return (<div className="movies">
        {movies.map(movie=>(
            <Movie key={movie.imdbID} movie={movie}/>
        ))}
    </div>);
}

export { Movies };
