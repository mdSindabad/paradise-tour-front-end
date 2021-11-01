import React from 'react';
import { Alert, Badge } from 'react-bootstrap';
import usePurchased from '../../hooks/usePurchased';
import './myOrders.css';

const MyOrders = ({ user }) => {
    // context hook
    const { purchased, setUpdate } = usePurchased();
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
                            <p><b>{index + 1}. {item.package}</b></p>
                            <Badge className="text-capitalize" bg={item.status == "completed" ? "success" : "primary"}>{item.status}</Badge>

                        </div>
                    })
            }
        </div>
    )
}

export default MyOrders;
