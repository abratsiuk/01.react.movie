import React from 'react';
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

class Main extends React.Component  {
  state = {
    movies:[],
    loading:true
  };

  searchCallback = (search) => this.reloadMovies(search);

  componentDidMount(){
    this.reloadMovies('matrix');
  }

  reloadMovies = (search)=>{
    this.setState({loading:true});
    fetch(`http://www.omdbapi.com/?apikey=8680c009&s=${search}`)
      .then(response=>response.json())
      .then(data=>this.setState({movies:data.Search, loading:false}))
      .catch(console.error);   
  }
  
  render() {
    const {movies, loading} = this.state;
    return (<main className="container content">
      <Search searchCallback={this.searchCallback}/>
      {loading ? 
          <Preloader/> :
          <Movies movies={movies}/>}
    </main>);
  }
}

export { Main };
