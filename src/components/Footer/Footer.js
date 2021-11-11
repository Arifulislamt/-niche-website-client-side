import React from 'react';
import './Footer.css';
import payment1 from '../../images/payment-card-1.png';
import payment2 from '../../images/payment-card-2.png';
import payment3 from '../../images/payment-card-3.png';
import payment4 from '../../images/payment-card-4.png';
import payment5 from '../../images/payment-card-5.png';


const Footer = () => {
    return (
        <div className="foot-color">
            <div className="container ">
                <div className="row">
                    <div className="col-md-3 my-5">
                        <h4 className="fw-bold">Hours</h4>
                        <p className="fw-bold my-1 icon-color">Weekdays 9:30am-7:00pm</p>
                        <p className="fw-bold my-1 icon-color">Saturday 10:00am-6:00pm</p>
                        <p className="fw-bold my-1 icon-color">Sunday Closed</p>
                        <i className="fab fa-facebook-square fa-2x icon-color"> </i>
                        <i className="fab fa-twitter-square fa-2x mx-2 icon-color"></i>
                        <i className="fab fa-instagram-square fa-2x icon-color"></i>
                        <i className="fab fa-linkedin fa-2x mx-2 icon-color"></i>
                    </div>
                    <div className="col-md-3 my-5">
                        <h4 className="fw-bold">Link</h4>
                        <p className="fw-bold my-1 icon-color">About Us</p>
                        <p className="fw-bold my-1 icon-color">Find a Used Car</p>
                        <p className="fw-bold my-1 icon-color">Services</p>
                        <p className="fw-bold my-1 icon-color">Blog</p>
                        <p className="fw-bold my-1 icon-color">Contact</p>
                    </div>
                    <div className="col-md-3 my-5">
                        <h4 className="fw-bold">Newsletter</h4>
                        <p className="fw-bold my-1 icon-color">
                            Find a Used Car
                            Services
                            Blog
                            Contact
                            Newsletter
                            By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                    </div>
                    <div className="col-md-3 my-5">
                    <h4 className="fw-bold">We Accepts:</h4>
                     <img className="m-1" src={payment1} alt=""/>
                     <img className="m-1" src={payment2}  alt=""/>
                     <img className="m-1" src={payment3}  alt=""/>
                     <img className="m-1" src={payment4}  alt=""/>
                     <img className="m-1" src={payment5}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;