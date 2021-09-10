import React, { useEffect, useState } from 'react';
import Loader from '../../../Components/Shared/Loader/Loader';
import TestimonialCard from '../../../Components/TestimonialCard/TestimonialCard';
import { getReviews } from '../../../Services/UserServices';

const Testimonial = () => {

    const [testimonialInfo, setTestimonialInfo] = useState([])

    useEffect(() => {
        getReviews().then(data => setTestimonialInfo(data))
    }, [])

    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5" >
                        <h3 className="text-center mt-3" >Testimonials</h3>
                    </div>

                    <div className="mb-5" >
                        {testimonialInfo.length === 0 ? <Loader></Loader> : ""}
                    </div>
                    <div className="w-100 custom-overflow" >
                        <div className="d-flex justify-content-between" >
                            {
                                testimonialInfo.map(each => <TestimonialCard testimonialInfo={each} ></TestimonialCard>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;