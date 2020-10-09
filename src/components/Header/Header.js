import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                {/* logo o the left */}
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazone logo" />
            </Link>
            <div className="header__search">
                {/* Search Box */}
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3 Links */}
            <div className="header__nav">
                {/* 1st Link */}


                {/* 2st Link */}


                {/* 3st Link */}


            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header

