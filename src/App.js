import React from 'react';

// don't change the Component name "App"
export default class App extends React.Component {

  constructor(){
    this.state = {movies:[]}
  }

  componentDidMount(){
    console.log('q')
  }
  
  render() {
    // TODO: implement component
    return <main className="container content"></main>;
  }
}