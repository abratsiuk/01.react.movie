import React from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

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
        const url = `http://www.omdbapi.com/?apikey=8680c009&s=${search}${typeParam}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch(console.error);
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
