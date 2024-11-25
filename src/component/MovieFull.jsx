import React from 'react';

function MovieFull(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props?.movie;
    console.log(props.movie);

    return (
        <div
            id={id}
            className='card movie-full'
        >
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                        alt=''
                    />
                ) : (
                    <img
                        className='activator'
                        src={poster}
                        alt=''
                    />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
                <p>imdbID: {id}</p>
            </div>
        </div>
    );
}

export { MovieFull };
