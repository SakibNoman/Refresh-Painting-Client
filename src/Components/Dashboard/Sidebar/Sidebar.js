import { faCartPlus, faHome, faList, faMailBulk, faPlus, faTh, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar bg-danger position-fixed d-flex flex-column justify-content-between col-md-2 py-5 px-4 h-100">

            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/book" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/review" className="text-white">
                        <FontAwesomeIcon icon={faMailBulk} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/manageServices" className="text-white">
                        <FontAwesomeIcon icon={faTh} /> <span>Manage Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orderList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;