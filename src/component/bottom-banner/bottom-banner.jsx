import React from 'react';
import '../bottom-banner/bottom-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCertificate, faHeadset} from '@fortawesome/free-solid-svg-icons';

const BottomBanner = () => {
    return(
        <div className="bottom-banner">
            <div className="wrapper">
                <div className="truck">
                    <FontAwesomeIcon icon={faTruck}/>
                    <p>Fast delivery</p>
                </div>
                <div className="protection">
                    <FontAwesomeIcon icon={ faCertificate }/>
                    <p>Buyer Protection</p>
                </div>
                <div className="support">
                    <FontAwesomeIcon icon={faHeadset}/>
                    <p>Customer Support</p>
                </div>
            </div>  
        </div>
    )
}

export default BottomBanner; 