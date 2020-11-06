import React from 'react';
import './navbar.css';
import logo from './logo.png';
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Header({image}){
    return (
        <>
            <header className="container">
                <nav className="nav">
                    <a href="/" className="nav__img-link"><img className="nav__img" src={logo} alt="img" /></a>
                    <input className="nav__input" type="search" placeholder="Buscar"/>
                    <div className="nav__icons">
                        <HomeIcon />
                        <SendOutlinedIcon />
                        <ExploreOutlinedIcon />
                        <FavoriteBorderIcon />
                        <img src={image} className="nav__img-profile" alt="profile" />
                    </div>
                </nav>
            </header>
            <div className="margin"></div>
        </>
    )
}


export default Header;