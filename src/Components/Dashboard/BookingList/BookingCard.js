import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const BookingCard = ({ bookingInfo }) => {
    const { serviceName, serviceImg, serviceDesc, status, color } = bookingInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center my-5">
            <Card border="light" className="shadow" style={{ width: '22rem' }}>
                <Card.Body>
                    <div className="d-flex justify-content-between" ><Card.Img variant="top" style={{ width: '80px' }} src={serviceImg} />
                        <div><h4><Badge variant={color} >{status}</Badge></h4></div>
                    </div>
                    <Card.Title className="text-danger" >{serviceName}</Card.Title>
                    <Card.Text>{serviceDesc}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;