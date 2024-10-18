import React, { useState, useEffect } from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        reloadMovies('matrix', 'all');
    }, []);

    const reloadMovies = (search, type) => {
        setLoading(true);
        const typeParam = type !== 'all' ? `&type=${type}` : '';
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${typeParam}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return (
        <main className='container content'>
            <Search reloadMovies={reloadMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}

export { Main };
