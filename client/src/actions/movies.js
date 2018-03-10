import uuid from 'uuid';

// ADD_MOVIE
export const addMovie = ({
    name, 
    imdbID,
    genre,
    actors,
    director,  
    plot, 
    poster,
    year
  } = {}
) => ({ 
type: 'ADD_MOVIE',
movie: {
    id: uuid(),
    name, 
    imdbID,
    genre,
    actors,
    director,  
    plot, 
    poster,
    year
  }
});

// REMOVE_MOVIE
export const removeMovie = ({id} = {})=>({
type: 'REMOVE_MOVIE',
id
})

//EDIT_MOVIE
export const editMovie = (id, updates) => ({
type: 'EDIT_MOVIE',
id,
updates
})
