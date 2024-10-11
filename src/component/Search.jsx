import React from 'react';
// import PropTypes from 'prop-types';

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }

    render(){
        const {search} = this.state;
        
        return (
            <div className="row">
                <div className='input-field'>
                    <input 
                        placeholder='search'
                        type='search' 
                        className='validate'
                        value={search}
                        onChange={event => this.setState({search: event.target.value})}
                        onKeyDown={event =>{
                            if( event.code === 'Enter' ) {
                                this.props.searchCallback(this.state.search)
                            }
                        }}
                    />
                    <button
                        className="btn search-btn"
                        onClick = { () => this.props.searchCallback(this.state.search)}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

// Search.propTypes = {
//     searchCallback: PropTypes.func.isRequired,
//   };

export { Search };