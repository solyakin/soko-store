import React from 'react';
import {Link} from 'react-router-dom'
import '../mobile-menu/mobile-menu.css';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBoxOpen, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenu = () => {
    return(
        <div className="mobile-menu">
            <Link to='/'>
                <div className="home">
                    <FontAwesomeIcon icon={faHome}/>
                    <p>Home</p>
                </div>
            </Link>
            
            <Link to='/category'>
                <div className="cater">
                    <FontAwesomeIcon icon={faCalendar}/>
                    <p>Catergory</p>
                </div>
            </Link>

                <div className="bag">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <p>Bag</p>
                </div>
            
                <div className="order">
                    <FontAwesomeIcon icon={faBoxOpen}/>
                    <p>Orders</p>
                </div>
            
        </div>
    )
}
export default MobileMenu;