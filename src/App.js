import React from 'react';
import { Movies } from './Movies';

// don't change the Component name "App"
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {movies:[]}
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=8680c009&s=matrix')
      .then(response=>response.json())
      .then(data=>this.setState({movies:data.Search}))
      .catch(console.error);      
  }
  
  render() {
    return (<main className="container content">
      <Movies movies={this.state.movies}/>
    </main>);
  }
}