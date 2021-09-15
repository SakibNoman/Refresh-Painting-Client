import React, { useEffect, useState } from 'react';
import Loader from '../../../Components/Shared/Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import ManageServiceCard from './ManageServiceCard';

const MangeServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [services])

    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className={`row container justify-content-center ${services.length ? '' : 'mt-5'}`}>
                        {services.length ?
                            services.map(each => <ManageServiceCard serviceInfo={each} ></ManageServiceCard>)
                            : <Loader />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MangeServices;