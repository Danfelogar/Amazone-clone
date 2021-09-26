import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


import '../styles/Header.css';
import { useStateValue } from '../state/StateProvider';


export const Header = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-logo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
};
