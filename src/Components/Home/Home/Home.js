import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <TopBanner></TopBanner>
            <Services></Services>
        </div>
    );
};

export default Home;