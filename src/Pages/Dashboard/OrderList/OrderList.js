import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loader from '../../../Components/Shared/Loader/Loader';
import { changeOrderStatus, getOrderList } from '../../../Services/DashboardServices';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getOrderList()
            .then(data => {
                data.reverse()
                setOrders(data)
            })
    }, [refresh])


    const handleChange = (e) => {
        const id = e.target.name;
        let color = ''
        if (e.target.value === "Done") {
            color = "success"
        }
        if (e.target.value === "On going") {
            color = "warning"
        }
        if (e.target.value === "Pending") {
            color = "danger"
        }
        const eventValue = {
            status: e.target.value,
            color: color
        }

        changeOrderStatus(id, eventValue)
            .then(data => {
                setRefresh(!refresh)
            })

    }

    return (
        <section>
            <div className="row mr-0">
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-10 d-flex justify-content-center">
                    <div className="row container mt-5 justify-content-center">
                        {orders.length ? <Table bordered striped hover responsive size="sm" variant="light" className="" >
                            <thead>
                                <tr >
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>{
                                orders.map(each => <tr  ><td>{each.fullname}</td> <td> {each.email} </td><td>{each.service}</td><td>Credit Card</td><td>
                                    <select name={each._id} value={each.status} onChange={e => handleChange(e)} className={`form-control w-75 border-0 text-white bg-${each.color}`} >
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td> </tr>)
                            }
                            </tbody>

                        </Table> : <Loader />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;