// methods that are called on the store

const getVisibleMovies = (movies, {text, sortBy, startDate, endDate}) => {
    console.log(movies)
    return movies.filter((movie)=> {
        const startDateMatch = typeof startDate !== 'number' || movie.dateReleased >= startDate;
        const endDateMatch = typeof endDate !== 'number' || movie.dateReleased <= endDate;
        const textMatch = movie.name.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.dateReleased < b.dateReleased ? 1: -1;
        } else if (sortBy === 'name'){
            return a.name > b.name ? 1: -1;
        }
    })
}

export default getVisibleMovies;