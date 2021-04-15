import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../single-item/single-item.css';

const SingleProductDisplay = ({singleProduct}) => {
    console.log(singleProduct)
    return(
        <div>
            {
                singleProduct.map(({id, imageUrl, name, price}) => (
                    <div className="single-product-display">
                        <div className="img">
                            <img src={imageUrl} alt={name}/>
                        </div>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur cum, sit nostrum ipsam sequi, nihil eos maiores magnam voluptas sed quae commodi earum voluptatibus reprehenderit voluptatum mollitia molestiae eligendi!</p>

                            <div className="price">
                                <div className="pricing-discount">
                                    <h3>UGX {price}</h3>
                                    <span>- 20%</span>
                                </div>
                                <p>UGX 148,000</p>
                            </div>

                            <div className="count">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>

                            <div className="size">
                                <h3>SELECT SIZE</h3>
                                <div className="options">
                                    <p>Fully Assembled</p>
                                    <p>stool only</p>
                                    <p>23</p>
                                </div>
                            </div>

                            <div className="color">
                                <h3>SELECT COLOR</h3>
                                <div className="color-wrapper">
                                    <div className="first"></div>
                                    <div className = 'second'></div>
                                </div>
                                
                            </div>
                            <div className="buttons">
                                <Link to='/'>
                                <button id={id}>Add to Bag</button>
                                </Link>
                                
                                <Link to="/">
                                <button id={id}>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
       </div>     
    )
}

const mapStateToProps = product => {
    return{
        singleProduct : product.product.singleProduct
    }
}
export default connect(mapStateToProps) (SingleProductDisplay)