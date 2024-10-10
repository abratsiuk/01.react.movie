import React from 'react';

class Search extends React.Component {
    constructor(props){
        super();
        this.state = {
            search: ''
        };
        this.searchCallback = props.searchCallback;
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
                                this.searchCallback(this.state.search)
                            }
                        }}
                    />
                    <button
                        className="btn search-btn"
                        onClick = { () => this.searchCallback(this.state.search)}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export { Search };