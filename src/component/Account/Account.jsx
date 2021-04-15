import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faBook, faFilter, faLocationArrow, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Account/account.css';
import Header from '../heading/header';

class Account extends React.Component {
    constructor(){
        super();
        this.state = {
            addressView : false,
            translate : '50',
            color : '#9C9C9C',
            popForm : 'none'
        }
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.showForm = this.showForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }
    handleClickOne = (event) => {
        event.preventDefault();
        if(this.state.addressView === true){
            this.setState({addressView : false, translate : '50', color: '#447BD3'})
        }
    }
    handleClickTwo = (event) => {
        if(this.state.addressView === false){
            this.setState({addressView : true, translate : '100', color: '#447BD3'})
        }   
    }
    showForm = (event) => {
        this.setState({ popForm : "block"})
    }
    closeForm = (event) => {
        this.setState({ popForm : "none"})
    }
    render(){
         const currentview = this.state.addressView;
         let translate = this.state.translate;
         let color = this.state.color;
         let popForm = this.state.popForm;
        return(
            <div className="account">
                <Header/>
                <div className="account-wrapper">
                   <div className="left-column">
                       <div className="order-text" style={{transform: `translateY(${translate}px)`}}></div>
                       <div className="my-order" style={{color: `${color}`}}  onClick={this.handleClickOne}>
                           <FontAwesomeIcon icon={faBook}/>
                           <p>My Order</p>
                       </div>
                       <div className="my-address" style={{color: `${color}`}}>
                           <FontAwesomeIcon icon={faLocationArrow}/>
                           <p onClick={this.handleClickTwo}>My Addresses</p>
                       </div>
                   </div>
                   
                    <div className="right-column">
                        {
                            (currentview === false) ?
                            <div>
                                <div className="top-text">
                                    <h3>showing all orders</h3>
                                    <button>
                                        <FontAwesomeIcon icon={faFilter}/>
                                        <span>Filters</span>
                                    </button>
                                </div>

                                    <div className="all-orders">
                                        <div className="orders">
                                            <div className="main">
                                                <FontAwesomeIcon icon={faStore} color={'rgb(172,172,172)'}  className="logo"/>
                                                <span>Target</span>
                                            </div>
                                            <div className="flex-content">
                                                <div className="content1">
                                                    <h5>0rder #2434511</h5>
                                                    <p>3 Items</p>
                                                </div>
                                                <div className="content2">
                                                    <h5>UGX 12,700</h5>
                                                    <p>25/05/2021, 01:55 PM</p>
                                                </div>
                                            </div>
                                            <p className="shipped">Shipped</p>
                                        </div>
                                    <div className="orders">
                                        <div className="main">
                                            <FontAwesomeIcon icon={faStore} color={'rgb(172,172,172)'}  className="logo"/>
                                            <span>Abhi's Juke Store</span>
                                        </div>
                                        <div className="flex-content">
                                            <div className="content1">
                                                <h5>0rder #1434591</h5>
                                                <p>1 Items</p>
                                            </div>
                                            <div className="content2">
                                                <h5>UGX 5,700</h5>
                                                <p>26/06/2021, 09:55 PM</p>
                                            </div>
                                        </div>
                                        <p className="delivered">Delivered</p>
                                    </div>
                                </div>
                            </div> : <div className="address-list">
                                        <div className="address-wrapper">
                                            <h4>Shrey Karan</h4>
                                            <p>Quench Ville, Plot 12 Nkruma Rd,<br></br> Kampala, Uganda</p>
                                            <p className="mobile">+256 76 633 4574</p>
                
                                            <div className="btns">
                                                <p>Edit</p>
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                        <div className="order">
                                            <div className="new-address-wrapper">
                                                <p onClick={this.showForm}>+ Add New Address</p>
                                            </div>
                                        </div>
                                    </div>
                        }

                        <div className="verification-code address-form" style={{display: `${popForm}`}}>
                            <div className="form-wrapper">
                                <form action="" method="post">
                                    <div className="form-title">
                                        <h3>Edit Address</h3>
                                        <FontAwesomeIcon icon={faWindowClose} onClick={this.closeForm}/>
                                    </div>
                                    <hr></hr>

                                    <div className="main-input">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text"/>
                                        <label htmlFor="Name">Mobile Number</label>
                                        <input type="text"/>
                                        <label htmlFor="Name">City</label>
                                        <input type="text"/>
                                        <label htmlFor="Name">Address</label>
                                        <textarea placeholder="e.g Kamelo Apartments, Plot 00 Johnson Rd, Room 24B" id=""></textarea>
                                    </div>
                                    <button className="edit-address-btn">Edit Address</button>
                                </form>
                            </div>
                            
                        </div>
                   </div>
                </div>
            </div>
        )
   }
    }
     

export default Account;