import React from 'react';
import MovieList from './MovieList';
import MovieListFilters from './MovieListFilters'

  const ContentDashboardPage = () => (
    <div>
      <MovieListFilters /> 
      <MovieList /> 
    </div>
  )

  export default ContentDashboardPage;