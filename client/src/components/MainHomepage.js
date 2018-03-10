import React from 'react';
import MovieCard from './MovieCard';
import Client from './Client'

 // the main dashboard for the program

export default class MainHomepage extends React.Component{
  
  state = {
    search: '',
    results: [],
    error: false
  }

  handleOnChange = (event) => {
  const search = event.target.value
  
  this.setState({
     search
  })
  
  Client.searchMovies(search, (results) => {
    const movies = [] 

    if (results.Response === "True"){
      results.Search.forEach((movie)=>{ movies.push(movie) })

      this.setState({
        results: movies,
        error: false
      });
    } else if (results.Response === "False"){
      this.setState({
        results: [],
        error: results.Error})
    }
    });
  }
  
  render(){
    const { results } = this.state
    const movieResults = results.map( (movie, idx) => {
      return <MovieCard key={idx} {...movie}/>
    })
    return(
        <div>
          <h3>Search for a Movie</h3>
    
            <input 
            type="text" 
            placeholder="Search movies..."
            autoComplete="off"
            onChange={this.handleOnChange}/>

        
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <div> 
             {results.length > 0 && <div>{movieResults}</div>}
            </div>
        </div>
      </div>
    )
  }
}


