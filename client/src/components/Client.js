/* eslint-disable no-undef */
function searchMovies(query, cb) {
    return fetch(`http://www.omdbapi.com/?s=${query}&apikey=a5d00900`, {
    }).then(checkStatus)
      .then(parseJSON)
      .then(cb);
  }


  function searchMovie(query, cb){
      return fetch(`http://www.omdbapi.com/?i=${query}&apikey=a5d00900`, {
      }).then(checkStatus)
        .then(parseJSON)
        .then(cb)
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
    return response.json();
  }
  
  const Client = { searchMovies, searchMovie };
  export default Client;