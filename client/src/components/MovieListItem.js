import React from 'react';
import { connect } from 'react-redux';
import{ removeMovie } from '../actions/movies';

const MovieListItem = ({ poster, name, genre, plot, year, dispatch, id })=> (
    <div>
     <img width="320" height="375" alt="Not Available" src={poster} />
     <h3>{name}</h3>
     <h4>{genre}</h4>
     <h5>{plot}</h5>
     <h5>Year Released: {year}</h5>
     <button onClick={ ()=>
       dispatch(removeMovie({id}))
      }> Remove Movie
     </button>
    </div>
)

export default connect()(MovieListItem)