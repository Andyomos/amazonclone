import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
                {/* logo o the left */}
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            <div className="header__search">
                {/* Search Box */}
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3 Links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Hello Andy</span>
                        <span  className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Try</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon/>

                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">0</span>

                    </div>
                </Link>

            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header

