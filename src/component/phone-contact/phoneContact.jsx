import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../phone-contact/phone-contact.css';

const PhoneContact = ({RequestNumber, closePopUp, verifyCode, verifyCodeDisplay}) =>{
    console.log()
    return(
        <div className="phone-contact" style={{display : `${RequestNumber}`}}>
            <div className="contact-wrapper">
                <div className="top-text">
                    <FontAwesomeIcon icon={faWindowClose} onClick={closePopUp}/>
                    <h3>Mobile Verification</h3>
                </div>
                <hr></hr>

                <div className= "detail">
                    <p>Please enter your phone number</p>
                    <div className="contact">
                        <p>Phone Number</p>
                        <select name="" id="">
                            <option value="">+234</option>
                            <option value="">+233</option>
                            <option value="">+256</option>
                        </select>
                        <input type="number" placeholder="00 000 000"/>
                    </div>
                </div>
                <hr></hr>

                <div className="buttons">
                    <button onClick={verifyCode}>Send Verification Code</button>
                </div>
            </div>
            
            {/* <div className="verification-code" style={{display: handleClick}}> 
                <div className="verify-wrapper">
                    <div className="input">
                        <div className="large-text">
                            <h3>Verify your number</h3>
                            <FontAwesomeIcon icon={faWindowClose} onClick={closePopUp}/>
                        </div>
                        <hr></hr>
                        <p className="inner-text">Please enter verification code sent via SMS to +256 76 633 4574</p>
                        <input type="text" placeholder="0"/>
                        <input type="text" placeholder="0"/>
                        <input type="text" placeholder="0"/>
                        <input type="text" placeholder="0"/>
                        <p className="resend-code">Resend code</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default PhoneContact;