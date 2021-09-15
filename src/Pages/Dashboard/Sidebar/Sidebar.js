import { faCartPlus, faHome, faList, faMailBulk, faPlus, faTh, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarContext, UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {

    const [{ isAdmin }] = useContext(UserContext)
    const [sideBarInfo, setSideBarInfo] = useContext(SideBarContext)
    const [isOpen, setIsOpen] = useState(false)

    const changeSideBar = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const newSideBarInfo = { ...sideBarInfo, isOpen, changeSideBar }
        setSideBarInfo(newSideBarInfo);
    }, [isOpen])

    return (
        <div className="sidebar bg-danger position-fixed d-flex flex-column justify-content-between col-md-2 py-5 px-4 h-100">

            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {!isAdmin && <div>
                    <li>
                        <Link to="/services" className="text-white">
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
                </div>}
                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard/addService" onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageServices" onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <FontAwesomeIcon icon={faTh} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orderList" onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin" onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>

        </div>
    );
};

export default Sidebar;