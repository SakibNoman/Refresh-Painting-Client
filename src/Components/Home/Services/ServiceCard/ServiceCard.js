import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ serviceInfo }) => {
    const { serviceName, serviceImg, serviceDesc, servicePrice } = serviceInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow" style={{ width: '18rem' }}>
                <Card.Title className="text-center text-danger py-4" >{serviceName}</Card.Title>
                <div className="text-center">
                    <Card.Img variant="top" style={{ width: '100px' }} src={serviceImg} />
                </div>
                <Card.Body>
                    <Card.Title className="text-danger" > $ {servicePrice} </Card.Title>
                    <Card.Text>
                        {serviceDesc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;