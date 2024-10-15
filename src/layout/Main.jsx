import React from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        this.reloadMovies('matrix', 'all');
    }

    reloadMovies = (search, type) => {
        this.setState({ loading: true });
        const typeParam = type !== 'all' ? `&type=${type}` : '';
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${typeParam}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Search reloadMovies={this.reloadMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
