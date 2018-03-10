import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
      <h1>Movie Database</h1>
      <NavLink to="/homepage" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/profile" activeClassName="is-active">Profile Page</NavLink>
      <NavLink to="/content" activeClassName="is-active">Your Content</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </header>
  )
  
  export default Header;