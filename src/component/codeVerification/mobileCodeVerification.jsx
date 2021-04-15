import React from 'react';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../codeVerification/mobile.verification.css';

const MobileCodeVerification = ({verifyCodeDisplay, closeVerifyCode}) =>{
    return(
        <div className="code-verification">     
            <div className="verification-code" style={{display: verifyCodeDisplay}}> 
                <div className="verify-wrapper">
                    <div className="input">
                        <div className="large-text">
                            <h3>Verify your number</h3>
                            <FontAwesomeIcon icon={faWindowClose} onClick={closeVerifyCode}/>
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
            </div>
        </div>
    )
}

export default MobileCodeVerification;