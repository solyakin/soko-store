import React from 'react';
import { Link } from 'react-router-dom';
import '../left-banner/left-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setFuniture } from '../Redux/render/renderAction';
import { setFood } from '../Redux/render/renderAction';
import { setGrocery } from '../Redux/render/renderAction';
import { setHome } from '../Redux/render/renderAction';
import { setKid } from '../Redux/render/renderAction';
import { setElectronics } from '../Redux/render/renderAction';

const LeftBannner = ({state, setFuniture, setFood, setGrocery, setHome, setKid, setElectronics}) => {
    return(
        <div className="left-banner">
            <ul>
                <li onClick={setGrocery} className="view-all">Hats (6)</li>
                <li onClick={setElectronics}>Electronics (12)</li>
                <li onClick={setFuniture}>Funiture (3)</li>
                <li onClick={setFood}>Women(8)</li>
                <li onClick={setHome}>Home (24)</li>
                <li onClick={setKid}>Men (9)</li>
                <Link to='/category'>
                    <li className='view-all'>View all categories <FontAwesomeIcon icon={faAngleRight}/></li>
                </Link>
            </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(LeftBannner);