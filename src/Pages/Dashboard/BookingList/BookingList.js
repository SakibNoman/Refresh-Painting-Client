import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Loader from '../../../Components/Shared/Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import BookingCard from './BookingCard';


const BookingList = () => {

    const [bookings, setBookings] = useState([]);
    const [{ email }] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://morning-escarpment-96840.herokuapp.com/userOrder/${email}`)
            .then(res => res.json())
            .then(data => {
                data.reverse()
                setBookings(data)
            })
    }, [email])

    return (
        <section>
            <div className="row mr-0">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <div className={`row container justify-content-center ${bookings.length ? "" : "mt-5"}`}>
                        {bookings.length ?
                            bookings.map(each => <BookingCard bookingInfo={each} ></BookingCard>)
                            : <Loader />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;