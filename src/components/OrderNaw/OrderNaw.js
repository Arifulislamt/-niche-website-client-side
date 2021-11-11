import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Navigation/Header';

const OrderNaw = () => {
    return (
        <div>
            <Header></Header>
              <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">OrderNaw</h1>
                </div>
                </div>
            
            <h1 className="my-5">OrderNaw</h1>
            <Footer></Footer>
        </div>
    );
};

export default OrderNaw;