import React from 'react';
import { connect } from 'react-redux';
import Client from './Client'
import { addMovie } from '../actions/movies'
// want a button here to add to your favorites via a reducer

class MovieCard extends React.Component{
    state = {
      name: '',
      imdbID: '',
      genre: '',
      actors: '',
      director: '',
      plot: '',
      poster: undefined,
      year: '',
      clicked: false, 
    }

    handleOnClick = (imdbID) => {
        Client.searchMovie(imdbID, (result)=>{
            this.setState({
                name: result.Title,
                imdbID: imdbID,
                genre: result.Genre,
                actors: result.Actors,
                director: result.Director,
                plot: result.Plot,
                poster: result.Poster,
                year: result.Year,
                clicked: true,
            })
        })
    }

    render(){
        const { Title, Year, Poster, imdbID } = this.props
        return(
            <div>
            <p>Title: { Title }</p>
            <p>Release Date:  { Year }</p>
            {<img 
                width="320" 
                height="375" 
                alt="Not Available" 
                src={Poster === "N/A" ? "https://media.giphy.com/media/5QZnClQar0Im32pFlz/giphy.gif" : Poster } />}
            <button onClick={
                ()=>this.handleOnClick(imdbID)
            }>More Information
            </button> 
                  {this.state.clicked &&  <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Genre: {this.state.genre}</td>
                        </tr>
                        <tr>
                            <td>Actors: {this.state.actors}</td>
                        </tr>
                        <tr>
                            <td>Director: {this.state.director}</td>
                        </tr>
                        <tr>
                            <td>Plot: {this.state.plot}</td>
                        </tr>
                        <tr>
                            <td>Year released: {this.state.year}</td>
                        </tr>
                        </tbody> 
                    </table>
                    <button onClick={()=>{ this.props.dispatch(addMovie(this.state)) }}>Add to Favorites</button>
                    </div> 
                  }
           
             <hr/>
            </div> 
        )
    }
} 

const mapStateToProps = (state) => {
    return {
      movies: state.movies
    };
  };
  

export default connect(mapStateToProps)(MovieCard);

