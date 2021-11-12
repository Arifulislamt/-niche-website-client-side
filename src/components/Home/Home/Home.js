import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Navigation/Header';
import Products from '../../Products/Products';
import Reviews from '../../Review/Reviews';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;