import React from 'react';
import images from '../../../images/imagedr.jpg';
import img from '../../../images/marker-2.png';
const About = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <h1 className="fw-bold text-center my-5">WHO <span className="text-warning"> WE ARE</span></h1>
                <div className="row">
                    <div className="col-md-6">
                    <img style={{width: "100%"}} className="m-1" src={images} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <p className="text-secondary">Welcome</p>
                        <h4 className="fw-bold">FIND THE RIGHT VEHICLE FOR YOU</h4>
                        <p>We have one of the largest inventory of quality used cars, trucks and SUV’s. We buy and sell all makes and models, and if there is a particular vehicle you are looking for, we can definitely do our best to find it for you! Also our private certified inspector can run the emissions tests and provide you with a test report.</p>
                        <img  className="m-1" src={img} alt=""/>
                        <p>Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;