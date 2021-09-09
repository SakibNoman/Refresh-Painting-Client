import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import Loader from '../../Shared/Loader/Loader';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        window.scrollTo({
            top: 10,
            left: 10,
            behavior: 'smooth'
        });
    }, [])

    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])


    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Services</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >Let's Choose <br /> Available Services</h1>
                    </div>
                    <div className="mb-5" >
                        {services.length === 0 ? <Loader></Loader> : ""}
                    </div>
                    {
                        services.map(each => <ServiceCard key={each._id} serviceInfo={each} ></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;