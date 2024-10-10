import React from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';

class Main extends React.Component  {
  state = {
    movies:[],
    loading:true
  };

  componentDidMount(){
    this.setState({loading:true});
    fetch('http://www.omdbapi.com/?apikey=8680c009&s=matrix')
      .then(response=>response.json())
      .then(data=>this.setState({movies:data.Search, loading:false}))
      .catch(console.error);      
  }
  
  render() {
    const {movies, loading} = this.state;
    return (<main className="container content">
      {loading ? 
          <Preloader/> :
          <Movies movies={movies}/>}
    </main>);
  }
}

export { Main };
