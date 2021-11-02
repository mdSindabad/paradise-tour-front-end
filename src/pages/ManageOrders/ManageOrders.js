import React, { useEffect, useState } from 'react';
import { Alert, Badge, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useManageOrder from '../../hooks/useManageOrder';
import usePurchased from '../../hooks/usePurchased';
import useServices from '../../hooks/useServices';
import './ManageOrders.css';

const ManageOrders = () => {
    // hooks
    const { purchased } = usePurchased();
    const { services, isLoading } = useServices();
    const { updateStatus, cancelOrder } = useManageOrder();

    // local state
    const [filteredList, setFilteredList] = useState([]);
    const [selected, setSelected] = useState('all');

    const updateList = (e) => {
        setSelected(e.target.innerText.toLowerCase());
        const newList = purchased.filter(item => item.package.split(":")[0].toLowerCase() == e.target.innerText.toLowerCase());
        if (e.target.innerText.toLowerCase() == 'all') {
            setFilteredList(purchased);
        } else {
            setFilteredList(newList);
        }
    }

    useEffect(() => {
        setSelected("all")
        setFilteredList(purchased);
    }, [purchased])

    return (
        <Container className="my-5 pt-4">
            <h1 className="text-primary">Manage Orders</h1>
            <Button as={Link} to="/tours" variant="primary">Recent Tours</Button>
            <div className="btn-container d-flex flex-wrap gap-2">
                <button onClick={updateList} className={selected == "all" && "selected"}>All</button>
                {
                    !isLoading && services?.map(service => {
                        return <button onClick={updateList} className={selected == service.title?.split(":")[0].toLowerCase() && "selected"}>{service.title?.split(":")[0]}</button>
                    })
                }
            </div>
            {
                filteredList.length == 0 ? <div className="vh-100 d-flex justify-content-center align-items-center">
                    <Alert variant="danger">
                        No Order Yet!
                    </Alert>
                </div> :
                    <div className="tour mt-4">{
                        filteredList?.map(item => {
                            return <div className="tour-item" key={item._id}>
                                <h5 className="text-center text-success">{item.package}</h5>
                                <div className="body">
                                    <p className="text-capitalize"><b>Name:</b> {item.name}</p>
                                    <p className="text-capitalize"><b>price:</b> ${item.price}</p>
                                    <p className="text-capitalize"><b>Name:</b> {item.duration}</p>
                                    <Badge className="status text-capitalize" bg={item.status == "completed" ? "success" : "primary"}>{item.status}</Badge>
                                    <Button onClick={() => updateStatus(item._id)} className={item.status == "completed" ? "btn-sm mt-3 disabled" : "btn-sm mt-3"} variant="success">Update</Button>
                                    <Button onClick={() => cancelOrder(item._id)} className={item.status == "completed" ? "btn-sm mt-3 disabled" : "btn-sm mt-3"} variant="danger">Cancel</Button>
                                </div>
                            </div>
                        })}
                    </div>
            }
        </Container>
    )
}

export default ManageOrders;
