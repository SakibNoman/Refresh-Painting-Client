import React from 'react';
import { Badge } from 'react-bootstrap';
import serviceImg from '../../../images/serviceImg';
import ServiceCard from './ServiceCard/ServiceCard';

const servicesList = [
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis'
    },
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis'
    },
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis'
    }

]

const Services = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Services</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >Let's Choose <br /> Available Services</h1>
                    </div>
                    {
                        servicesList.map(each => <ServiceCard serviceInfo={each} ></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;