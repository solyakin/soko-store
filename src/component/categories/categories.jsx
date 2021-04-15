import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../categories/categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import fruit from '../../assets/images/fruit.jpg'
import headset from '../../assets/images/headset.jpg'
import head from '../../assets/images/image.jpg'
import sneakers from '../../assets/images/sneakers.png'
import chair from '../../assets/images/chair.jpg'
import women from '../../assets/images/women.jpeg'
import kid from '../../assets/images/kid.jpeg'
import grocery from '../../assets/images/grocery.jpeg'
import { setFuniture } from '../Redux/render/renderAction';
import { setFood } from '../Redux/render/renderAction';
import { setGrocery } from '../Redux/render/renderAction';
import { setHome } from '../Redux/render/renderAction';
import { setKid } from '../Redux/render/renderAction';
import { setElectronics } from '../Redux/render/renderAction';
import Header from '../heading/header';

const Category = ({setKid, setHome, setElectronics, setFuniture, setGrocery, setFood}) => {
    return(
        <div className="category">
            <Header/>
            <div className="search-bar">
                <input type="text" placeholder="search for products.."/>
                <FontAwesomeIcon icon={faSearch} color= {'#9c9c9c'} className="search-btn"/>
            </div>
            <h3 className="top-categories">TOP CATEGORIES</h3>
            <div className="images">
                <div className="image-container">
                    <img className="fruit" src={fruit} alt=""/>
                    <div className="overlay">
                        <p>Fresh Food</p>
                    </div>

                </div>
                <div className="image-container">
                    <img src={headset} alt=""/>
                    <Link to='/'>
                        <div className="overlay" onClick={setElectronics}>
                            <p>Electronics</p>
                        </div>
                    </Link>
                </div>
                <div className="image-container">
                    <img src={head} alt="" />
                    <Link to='/'>
                        <div className="overlay" onClick={setHome}>
                            <p>Home Stuff</p>
                        </div>
                    </Link>
                </div>
                <div className="image-container">
                    <img src={chair} alt="" />
                    <Link to='/'>
                        <div className="overlay" onClick={setFuniture}>
                            <p>Funiture</p>
                        </div>
                    </Link>

                </div>
                <div className="image-container">
                    <img src={grocery} alt=""/>
                    <div className="overlay">
                        <p>Grocery</p>
                    </div>

                </div>
                <div className="image-container">
                    <img src={women} alt=""/>
                    <Link to='/'>
                        <div className="overlay" onClick={setFood}>
                            <p>Women</p>
                        </div>
                    </Link>

                </div>
                <div className="image-container">
                    <img src={kid} alt=""/>
                    {/* <Link to='/'> */}
                        <div className="overlay" onClick={setGrocery}>
                            <p>Hats</p>
                        </div>
                    {/* </Link> */}
                    
                </div>
                <div className="image-container">
                    <img src={sneakers} alt=""/>
                    <Link to='/'>
                        <div className="overlay"  onClick={setKid}>
                            <p>Men</p>
                        </div>
                    </Link>

                </div>
            </div> 
        </div>
    )
}
const mapStateToProps = state => {
    return{
        state : state.render.state
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setFuniture : () => dispatch(setFuniture()),
        setFood : () => dispatch(setFood()),
        setGrocery : () => dispatch(setGrocery()),
        setHome : () => dispatch(setHome()),
        setKid : () => dispatch(setKid()),
        setElectronics : () => dispatch(setElectronics())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);