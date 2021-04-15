import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <TopBanner></TopBanner>
            <Services></Services>
            <Projects></Projects>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;