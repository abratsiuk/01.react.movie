import React from 'react';

function Movie(props) {
    const movie = props.movie;
    return (
        <div className="row">
            <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                <img src={movie.Poster} alt=''/>
                <span className="card-title">{movie.Title}</span>
                </div>
                <div className="card-content">
                <p>{movie.Type},{movie.Year}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export { Movie };
