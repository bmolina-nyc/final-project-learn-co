// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore, combineReducers} from 'redux';
// import uuid from 'uuid'
// import { start } from 'redux';

// const Redux = () => (
//     <div>
//     redux
//     </div>
// )



// export default Redux;

// //Action generators - return action objects in functions

// // const incrementCount = ({ incrementBy = 1} = {}) => ({
// //     type: 'INCREMENT',
// //     incrementBy
// // })

// // const decrementCount = ({decrementBy = 1} = {}) => ({
// //     type: 'DECREMENT',
// //     decrementBy
// // })

// // const resetCount = () => ({
// //     type: 'RESET'
// // })

// // const setCount = ({count}= {}) => ({
// //   type: 'SET',
// //   count
// // })

// // const countReducer = (state = {count: 0 }, action) => {
// //     switch(action.type){
// //       case 'INCREMENT':
// //         return {
// //           count: state.count + action.incrementBy
// //         };
// //       case 'DECREMENT':
      
// //         return {
// //             count: state.count - action.decrementBy
// //         }
// //       case 'RESET':
// //         return {
// //           count: 0
// //         }
// //       case 'SET':
// //         return {
// //             count: action.count
// //         };
// //       default: 
// //       return state;
// //     }
// //   }

// // const store = createStore(countReducer);

// // // the subscribe method calls a console.log function everytime the state changes
// // store.subscribe(()=>{
// //   console.log(store.getState())
// // })

// // // to make something happen - you use an action object, it is the second argument for creating a store

// // // this one dispatch call has a dynamic action (incrementBy 5)
// // // store.dispatch({
// // //     type: 'INCREMENT',
// // //     incrementBy: 5
// // // })


// // // you can make action generator methods  that you can then call with dispatch
// // store.dispatch(incrementCount({incrementBy: 5}));

// // store.dispatch(incrementCount());

// // store.dispatch(resetCount())

// // store.dispatch(decrementCount())
// // store.dispatch(decrementCount({decrementBy: 10}))



// // store.dispatch(setCount({count: -100}))




// // const demoState = {
// //     movies: [{
// //       id: '232',
// //       description: 'Rent',
// //       note: 'This is a note',
// //       amount: 4343,
// //       createdAt: 0
// //     }],
// //     filters: {
// //       text: 'rent',
// //       sortBy: 'name', // name or date released
      
// //     }
// // }

// // ADD_MOVIE
// const addMovie = ({
//         name, 
//         imdbID,  
//         description, 
//         boxOffice, 
//         dateReleased} = {}) => ({
//     type: 'ADD_MOVIE',
//     movie: {
//         id: uuid(),
//         name, // define the properties you need later
//         imdbID,
//         description,
//         boxOffice,
//         dateReleased
//     }
// })

// // REMOVE_MOVIE
// const removeMovie = ({ID} = {})=> ({
//     type: 'REMOVE_MOVIE',
//     ID
// })

// //EDIT_MOVIE
// const editMovie = (ID, updates) => ({
//     type: 'EDIT_MOVIE',
//     ID,
//     updates
// })

// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// })

// //SORT_BY_NAME
// const sortByName = () => ({
//   type: 'SORT_BY_NAME'
// })

// //SORT_BY_DATE
// const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// })

// // SET_START_DATE
// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
//   });
  
//   // SET_END_DATE
//   const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
//   });





// const moviesReducerDefaultState = []

// const moviesReducer = (state = moviesReducerDefaultState, action) => {
//   switch (action.type){
//       case 'ADD_MOVIE':
//         return [
//             ...state,
//             action.movie
//         ];
//       case 'REMOVE_MOVIE':
//         return state.filter((movie) => movie.id !== action.ID);
//       case 'EDIT_MOVIE':
//         return state.map((movie)=> {
//             if (movie.id === action.ID){
//                 return {
//                     ...movie,
//                     ...action.updates
//                 }
//             } else {
//                 return movie 
//                 }
//             }
//         )
//       default:
//         return state;
//   }
// };

// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: '',
//     startDate: undefined,
//     endDate: undefined
// }

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     console.log(action)
//   switch (action.type){
//     case 'SET_TEXT_FILTER':
//       return {
//           ...state,
//           text: action.text
//       }
//       case 'SORT_BY_NAME':
//         return {
//           ...state,
//           sortBy: 'name'
//         }
//     case 'SORT_BY_DATE':
//     return {
//         ...state,
//         sortBy: 'date'
//     }
//     case 'SET_START_DATE':
//     return {
//       ...state,
//       startDate: action.startDate
//     };
//   case 'SET_END_DATE':
//     return {
//       ...state,
//       endDate: action.endDate
//     };
//       default: 
//         return state;
//   }
// }

// // Store creation

// const store = createStore(
//     combineReducers({
//         movies: moviesReducer,
//         filters: filtersReducer
//     })
// );

// const getVisibleMovies = (movies, {text, sortBy, startDate, endDate})=> {
//     return movies.filter((movie)=> {
//         const startDateMatch = typeof startDate !== 'number' || movie.dateReleased >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || movie.dateReleased <= endDate;
//         const textMatch = movie.name.toLowerCase().includes(text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b) => {
//         if (sortBy === 'date'){
//             return a.dateReleased < b.dateReleased ? 1: -1;
//         } else if (sortBy === 'name'){
//             return a.name > b.name ? 1: -1;
//         }
//     })
// }


// store.subscribe(()=>{
//     const state = store.getState();
//     const visibleMovies = getVisibleMovies(state.movies, state.filters);
//     console.log(state)
//     console.log(visibleMovies)
// })

// const movie1 = store.dispatch(addMovie({name: 'b', imdbID: undefined, description: undefined , boxOffice:undefined, dateReleased: -1}))
// const movie2 = store.dispatch(addMovie({name: 'a', dateReleased: -2}))
//  //store.dispatch(setStartDate(2100))  ///want this to be a box office release filter
// //store.dispatch(setEndDate(32000)) // want this to be a box office release filter
// // store.dispatch(setTextFilter('n'))

// // store.dispatch(editMovie(movie2.movie.id, {movie:'an updated name'} ))

// // store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter('rent updated'));


// store.dispatch(sortByDate());
// store.dispatch(sortByName());

// // store.dispatch(sortByDate());

// // movies.sort((a,b)=>{
// //     var nameA = a.name.toLowerCase(), nameB= b.name.toLowerCase();
// //     if (nameA < nameB){
// //         return -1
// //     } else if (nameA > nameB){
// //         return 1
// //     }
// //     return 0
// // })



// Higher Order Component (HOC) - A component (HOC) that renders another component

