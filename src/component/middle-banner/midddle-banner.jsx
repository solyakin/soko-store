import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../middle-banner/middle-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import  setSingleProduct from '../Redux/ProductDetail/productAction';

const MiddleBannner = ({id, name, imageUrl, price, handleClick, localStorageProduct, setSingleProduct }) => { 

    let imageClick = (event) =>{
        let ButtonIndex = Number(event.target.id);
        console.log(ButtonIndex)
        let array = localStorageProduct.map(({ items }) => {
        return items.filter(item => item.id === ButtonIndex)
        }).filter(y => y !== undefined);
        
        array.map(item => {
            if(item.length == 1){
                return setSingleProduct(item)
            }
        })
      }
      
    return(
        <div className="middle-banner">
            <div className="item">
                <Link to='/product-detail'>
                    <img id={id} src={imageUrl} alt={name} onClick={imageClick}/>
                </Link>
                <div className="product-detail">
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
            </div>
            
            <div className="buy-btn">
                <button id={id} onClick={handleClick}><FontAwesomeIcon icon={faPlus}/> Add</button>
            </div>
        </div>
    )
}

const mapStateToProps = singleProduct => {
    return{
        singleProduct : singleProduct.product.singleProduct
    }
}
const mapdispatchToProp = dispatch => {
    return{
        setSingleProduct : product => dispatch(setSingleProduct(product))
    }
}

export default connect(mapStateToProps, mapdispatchToProp)(MiddleBannner);