import React, { Component } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import apiKey from './apiKey.js';
import ButtonAppBar from './AppBar';
import ImgMediaCard from './components/ImgMediaCard';

const originalMovies = [
  {id: 1, title: 'Star Wars'}, 
  {id: 2, title: 'Star Trek'}, 
  {id: 3, title: 'Blade Runner'}
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
      <React.Fragment>
        <ButtonAppBar />
        <div className="App movies">
          {movies.map(movie => <ImgMediaCard key={movie.id} movie={movie}/>)}
        </div>  
      </React.Fragment>
      
    );
  }
}

export default App;
