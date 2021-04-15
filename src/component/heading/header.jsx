import React from 'react';
import '../heading/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faStore, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = ({bagCount}) =>{
    return(
        <div className="header">
            <header>
                <div className="logo-container">
                    <div className="main-logo">
                        <Link to="/">
                            <FontAwesomeIcon icon={faStore} color={'rgb(172,172,172)'}  className="logo"/>
                        </Link>
                    </div>
                    <div className="logo-text"> 
                        <h3>Target</h3>
                        <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                    </div>
                </div>

                <div className="left-menu">
                    <div className="bag">
                        <div className="bag-icon">
                            <FontAwesomeIcon icon={faShoppingBag} color={'#9c9c9c'}/>
                            <span>{bagCount}</span>
                        </div>
                        
                        <p>Bag</p>
                    </div>
                    <div className="account">
                        <FontAwesomeIcon icon={farUser} color={'#9c9c9c'}/>
                        <Link to='/account'>
                         <span>Account</span>
                        </Link>
                    </div>
                </div>
            </header>

            <hr className="header-line"/>
        </div>
    )
}

export default Header;