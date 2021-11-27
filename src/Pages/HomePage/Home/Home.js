import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import HomeProducts from '../../Products/Product/HomeProducts/HomeProducts';
import HomeBanner from '../HomeBanner/HomeBanner';
// import Testimonial from '../Testimonials/Testimonial'
import Menu from '../Menu/Menu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeBanner />
            <Menu />
            <HomeProducts />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;