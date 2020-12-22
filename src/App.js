import React, { Component } from 'react'; 
import './App.css';
import MovieCard from './components/MovieCard';
import apiKey from './apiKey.js';

const originalMovies = [
  {id: 1, title: 'Star Wars'}, 
  {id: 2, title: 'Star Trek'}, 
  {id: 3, title: 'Blade Runner'}
];

class App extends Component {
  state = {movies: []}
  async componentDidMount() {
  // setTimeout(() => 
  //   this.setState({movies: originalMovies}), 5000); 
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`); 
    const json = await response.json(); 
    this.setState({movies: json.results})  
  }
  render () {
    const {movies} = this.state; 

    return (
      <div className="App">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    );
  }
}

export default App;
