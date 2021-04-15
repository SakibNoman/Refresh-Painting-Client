import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ServiceCard = ({ serviceInfo }) => {
    const { serviceName, serviceImg, serviceDesc } = serviceInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow" style={{ width: '18rem' }}>
                <Card.Title className="text-center text-danger py-4" >{serviceName}</Card.Title>
                <div className="text-center">
                    <Card.Img variant="top" style={{ width: '100px' }} src={serviceImg} />
                </div>
                <Card.Body>
                    <Card.Title className="text-danger" > $ 255 </Card.Title>
                    <Card.Text>
                        {serviceDesc}
                    </Card.Text>
                    <Button variant="light" className="text-danger" >Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;