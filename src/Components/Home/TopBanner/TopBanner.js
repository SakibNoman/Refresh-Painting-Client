import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import topBannerImg from '../../../images/topBanner.jpg';

const TopBanner = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="container">
                            <h1 style={{ fontSize: '55px' }} >Professional <br /> Painting Services</h1>
                            <p className="mt-5" > <span> <FontAwesomeIcon color="red" icon={faCheck} /> Special Offer</span> <span className="ml-5" > <FontAwesomeIcon color="red" icon={faCheck} /> Professional Worker</span> </p>
                            <p className="mt-4" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, praesentium.</p>
                            <button className="btn btn-danger mt-4">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-5">
                        <div className="text-center" >
                            <img style={{ height: '500px' }} src={topBannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;