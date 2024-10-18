import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleType = (event) => {
        this.setState({ type: event.target.dataset.type }, this.handleFilter);
    };

    handleFilter = () => {
        this.props.reloadMovies(this.state.search, this.state.type);
    };

    render() {
        const { search } = this.state;

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        placeholder='search'
                        type='search'
                        className='validate'
                        value={search}
                        onChange={(event) =>
                            this.setState({ search: event.target.value })
                        }
                        onKeyDown={(event) => {
                            if (event.code === 'Enter') {
                                this.handleFilter();
                            }
                        }}
                    />
                    <button
                        className='btn search-btn light-blue accent-4'
                        onClick={this.handleFilter}
                    >
                        Search
                    </button>

                    <div>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.handleType}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleType}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.handleType}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    reloadMovies: PropTypes.func.isRequired,
};

export { Search };
