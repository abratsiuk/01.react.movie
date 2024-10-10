import React from 'react';
import { Movies } from '../component/Movies';

class Main extends React.Component  {
  state = {movies:[]};

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=8680c009&s=matrix')
      .then(response=>response.json())
      .then(data=>this.setState({movies:data.Search}))
      .catch(console.error);      
  }
  
  render() {
    const {movies} = this.state;
    return (<main className="container content">
      <Movies movies={movies}/>
    </main>);
  }
}

export { Main };
