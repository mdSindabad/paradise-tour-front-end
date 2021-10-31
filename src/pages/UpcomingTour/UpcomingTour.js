import React, { useEffect, useState } from 'react';
import { Alert, Badge, Button, Container } from 'react-bootstrap';
import usePurchased from '../../hooks/usePurchased';
import './upcomingTour.css';

const UpcomingTour = () => {
    // context hook
    const { purchased, setUpdate } = usePurchased();

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

    const updateStatus = (e) => {

    }

    useEffect(() => {
        setSelected("all")
        setFilteredList(purchased);
    }, [])

    return (
        <Container className="my-5 pt-4">
            <h1 className="text-primary">Upcoming Tours</h1>
            <div className="btn-container">
                <button onClick={updateList} className={selected == "all" && "selected"}>All</button>
                <button onClick={updateList} className={selected == "paris" && "selected"}>Paris</button>
                <button onClick={updateList} className={selected == "london" && "selected"}>London</button>
                <button onClick={updateList} className={selected == "rome" && "selected"}>Rome</button>
                <button onClick={updateList} className={selected == "sydney" && "selected"}>Sydney</button>
                <button onClick={updateList} className={selected == "bali" && "selected"}>Bali</button>
            </div>
            {
                filteredList.length == 0 ? <div className="vh-100 d-flex justify-content-center align-items-center">
                    <Alert variant="danger">
                        No Order Yet!
                    </Alert>
                </div> :
                    <div className="tour mt-4">{
                        filteredList.map(item => {
                            return <div className="tour-item" key={item._id}>
                                <h5 className="text-center text-success">{item.package}</h5>
                                <div className="body">
                                    <p className="text-capitalize"><b>Name:</b> {item.name}</p>
                                    <p className="text-capitalize"><b>price:</b> ${item.price}</p>
                                    <p className="text-capitalize"><b>Name:</b> {item.duration}</p>
                                    <Badge className="status text-capitalize" bg={item.status == "completed" ? "success" : "primary"}>{item.status}</Badge>
                                    <Button className={item.status == "completed" ? "btn-sm mt-3 disabled" : "btn-sm mt-3"} variant="success">Update</Button>
                                </div>
                            </div>
                        })}
                    </div>
            }
        </Container>
    )
}

export default UpcomingTour;
