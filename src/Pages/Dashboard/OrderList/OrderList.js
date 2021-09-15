import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loader from '../../../Components/Shared/Loader/Loader';
import SummaryCard from '../../../Components/SummaryCard';
import { changeOrderStatus, getOrderList } from '../../../Services/DashboardServices';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orders, setOrders] = useState([]);

    const [orderSummary, setOrderSummary] = useState([])

    useEffect(() => {
        getOrderList()
            .then(data => {
                data.reverse()
                setOrders(data)
            })
    }, [])

    useEffect(() => {
        const totalOrder = orders.length;
        const totalPending = orders.filter(each => each.color === 'danger').length;
        const totalOnGoing = orders.filter(each => each.color === 'warning').length;
        const totalDone = orders.filter(each => each.color === 'success').length;

        setOrderSummary([
            {
                id: 1,
                name: 'Total Order',
                value: totalOrder,
                color: 'dark',
                pathColor: '#343A40',
                perchant: 100
            },
            {
                id: 2,
                name: 'Pending',
                value: totalPending,
                color: 'danger',
                pathColor: '#DC3545',
                perchant: parseInt((totalPending * 100) / totalOrder) || 0
            },
            {
                id: 3,
                name: 'On Going',
                value: totalOnGoing,
                color: 'warning',
                pathColor: '#FFC107',
                perchant: parseInt((totalOnGoing * 100) / totalOrder) || 0
            },
            {
                id: 4,
                name: 'Done',
                value: totalDone,
                color: 'success',
                pathColor: '#28A745',
                perchant: parseInt((totalDone * 100) / totalOrder) || 0
            }
        ])

    }, [orders])


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

        let modifiedOrders = [];
        orders.forEach(order => {
            if (order._id === id) {
                order.status = eventValue.status;
                order.color = eventValue.color;
            }
            modifiedOrders.push(order)
        })
        setOrders(modifiedOrders);


        changeOrderStatus(id, eventValue)
            .then(data => data.json())

    }

    return (
        <section>
            <div className="row mr-0">
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-10 mt-5 d-flex flex-column align-items-center">
                    <div className="row">
                        {
                            orderSummary.map(each => <SummaryCard key={each.id} info={each} />)
                        }
                    </div>
                    <div className="row container  justify-content-center">
                        {orders.length ? <Table bordered striped hover responsive size="sm" variant="light" className="orderTable" >
                            <thead>
                                <tr >
                                    <th>Name</th>
                                    <th className="email-cell" >Email ID</th>
                                    <th>Service</th>
                                    <th>Paid With</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="" >{
                                orders.map(each => <tr  ><td>{each.fullname}</td> <td className="email-cell" > {each.email} </td><td>{each.service}</td><td>Credit Card</td><td>
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