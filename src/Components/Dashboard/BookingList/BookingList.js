import React from 'react';
import serviceImg from '../../../images/serviceImg';
import Sidebar from '../Sidebar/Sidebar';
import BookingCard from './BookingCard';

const bookings = [
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis',
        status: 'Done',
        color: 'success'
    },
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis',
        status: 'Pending',
        color: 'danger'
    },
    {
        serviceName: 'Exterior Painting',
        serviceImg: serviceImg,
        serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis',
        status: 'On Going',
        color: 'warning'
    }

]

const BookingList = () => {
    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="row container">
                        {
                            bookings.map(each => <BookingCard bookingInfo={each} ></BookingCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;