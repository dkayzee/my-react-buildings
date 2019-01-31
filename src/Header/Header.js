import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/favorites'}>Favorite Buildings</Link>
        </nav>
      </header>
    )
}

export default Header;