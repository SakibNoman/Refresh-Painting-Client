import React, { useEffect, useState } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import TestimonialCard from './TestimonialCard/TestimonialCard';

const Testimonial = () => {

    const parent = { width: `60em`, height: `220px` }

    const [testimonialInfo, setTestimonialInfo] = useState([])

    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonialInfo(data))
    }, [])

    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5" >
                        <h3 className="text-center mt-3" >Testimonials</h3>
                    </div>

                    <div style={parent} >
                        <HorizontalScroll
                            reverseScroll={true}
                        >
                            {
                                testimonialInfo.map(each => <TestimonialCard testimonialInfo={each} ></TestimonialCard>)
                            }
                        </HorizontalScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;