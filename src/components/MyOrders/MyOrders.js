import React from 'react';
import { Alert, Badge, Button } from 'react-bootstrap';
import useManageOrder from '../../hooks/useManageOrder';
import usePurchased from '../../hooks/usePurchased';
import './myOrders.css';

const MyOrders = ({ user }) => {
    // hook
    const { purchased, setUpdate } = usePurchased();
    const { updateStatus, cancelOrder } = useManageOrder();

    const myOrders = purchased.filter(item => item.email === user.email);


    return (
        <div>
            <h5>My Orders</h5>
            {
                !myOrders.length ? <Alert variant="danger">
                    You haven't ordered anything yet!
                </Alert> :
                    myOrders.map((item, index) => {
                        return <div className="order d-flex justify-content-between align-items-center">
                            <div className="">
                                <p><b>{index + 1}. {item.package}</b></p>
                                <Badge className="text-capitalize" bg={item.status == "completed" ? "success" : "primary"}>{item.status}</Badge>
                            </div>
                            <div className="">
                                <Button onClick={() => updateStatus(item._id)} className={item.status == "completed" ? "btn-sm mt-3 disabled" : "btn-sm mt-3"} variant="success">Update</Button>
                                <Button onClick={() => cancelOrder(item._id)} className={item.status == "completed" ? "btn-sm mt-3 disabled" : "btn-sm mt-3"} variant="danger">Cancel</Button>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}

export default MyOrders;
