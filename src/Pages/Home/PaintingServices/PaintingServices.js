import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';
import Loader from '../../../Components/Shared/Loader/Loader';
import { getPaintingServices } from '../../../Services/UserServices';
import { scrollTo } from '../../../tools/scroll';

const PaintingServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        scrollTo(90, 20);
        getPaintingServices().then(data => {
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

export default PaintingServices;