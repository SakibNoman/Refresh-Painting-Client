import React from 'react';
import reviewer from '../../../images/reviewer.png';
import TestimonialCard from './TestimonialCard/TestimonialCard';

const testimonialInfo = [
    {
        name: 'Nash Patrik',
        post: 'CEO, Manpol',
        photo: reviewer,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 5
    },
    {
        name: 'Nash Patrik',
        post: 'CEO, Manpol',
        photo: reviewer,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 5
    },
    {
        name: 'Nash Patrik',
        post: 'CEO, Manpol',
        photo: reviewer,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 5
    }
]

const Testimonial = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5" >
                        <h3 className="text-center mt-3" >Testimonials</h3>
                    </div>
                    {
                        testimonialInfo.map(each => <TestimonialCard testimonialInfo={each} ></TestimonialCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Testimonial;