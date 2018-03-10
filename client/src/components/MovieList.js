import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import getVisibleMovies from '../selectors/movies'

  const MovieList = (props) => (
    <div>
      <h1>Movie List</h1>
      {props.movies.map((movie) => {
          return <MovieListItem key={movie.id} {...movie} />
      })}
    </div>
  )


  const mapStateToProps = (state)=>{
    return {
      movies: getVisibleMovies(state.movies, state.filters)
    }
  };

  export default connect(mapStateToProps)(MovieList);