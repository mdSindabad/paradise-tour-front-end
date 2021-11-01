import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
    // local state
    const [services, setServices] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');
    const [update, setUpdate] = useState(false);


    useEffect(() => {
        setError('');
        setIsloading(true);
        setUpdate(false)

        axios.get('https://lit-castle-83888.herokuapp.com/service')
            .then(res => {
                setServices(res.data);
                setIsloading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsloading(false);
            })
    }, [update]);
    return (
        <ServicesContext.Provider value={{ services, isLoading, error, setUpdate }}>
            {children}
        </ServicesContext.Provider>
    )
}
export default ServicesProvider;