import React from 'react';
import '../product-detail/product-detail.css';
import Header from '../heading/header';
import img from '../../assets/images/fh.jpg';
import facemask from '../../assets/images/facemasks.jpg';
import chairs from '../../assets/images/chairs.jpg';
import image from '../../assets/images/image.jpg';
import images2 from '../../assets/images/duvet.jpg';
import images3 from '../../assets/images/chandler.jpg';
import images4 from '../../assets/images/images4.jpg';
import images5 from '../../assets/images/images5.jpg';
import BottomBanner from '../bottom-banner/bottom-banner';
import Footer from '../footer/footer';
import SingleProductDisplay from '../single-item/single-item';

const ProductDetail = () => {
        return( 
            <div className="product-detail">
                <Header/>
                <div className="main-container">
                    <div className="product-detail-wrapper">
                        <SingleProductDisplay />   
                    </div>

    {/* WHAT TO DO?? */}
    {/* - mapstateToProp will be on product detail
    - mapdispatchToProp will change state from singleItem to SingleProduct
    -we can now set the value in SingleProductDisplay */}


                    {/* start of related products */}
    
                    <div className="related-products">
                            <h2>RELATED PRODUCTS</h2>
                            <div className="related-products-container">
                                <div className="product">
                                    <img src={image} alt=""/>
                                    <p>Holiday Print Flannel Sheet set...</p>
                                </div>
                                <div className="product">
                                    <img src={chairs} alt=""/>
                                    <p>Holiday Print Flannel Sheet set...</p>
                                </div>
                                <div className="product">
                                    <img src={images2} alt=""/>
                                    <p>Holiday Print Flannel Sheet set...</p>
                                </div>
                                <div className="product">
                                    <img src={images3} alt=""/>
                                    <p>Chandler grey stool set otta...</p>
                                </div>
                                <div className="product">
                                    <img src={facemask} alt=""/>
                                    <p>Kid's size multi-color facemask...</p>
                                </div>
                                <div className="product">
                                    <img src={images4} alt=""/>
                                    <p>Holiday Print Flannel Sheet set...</p>
                                </div>
                                <div className="product">
                                    <img src={images5} alt=""/>
                                    <p>Holiday Print Flannel Sheet set...</p>
                                </div>
                            </div>
                        </div>
                </div>
                <BottomBanner/>
                <Footer/>
            </div>
        )
}

export default ProductDetail;