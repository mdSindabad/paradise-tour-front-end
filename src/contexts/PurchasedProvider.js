import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const PurchasedContext = createContext();

const PurchasedProvider = ({ children }) => {
    // local state
    const [purchased, setPurchased] = useState({});
    const [isLoadingPurchased, setIsloadingPurchased] = useState(true);
    const [purchasedError, setPurchasedError] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        setUpdate(false)
        setPurchasedError('');
        setIsloadingPurchased(true);

        axios.get('https://lit-castle-83888.herokuapp.com/purchase')
            .then(res => {
                setPurchased(res.data);
                setIsloadingPurchased(false);
            })
            .catch(err => {
                setPurchasedError(err.message);
                setIsloadingPurchased(false);
            })
    }, [update]);
    return (
        <PurchasedContext.Provider value={{ purchased, isLoadingPurchased, purchasedError, setUpdate }}>
            {children}
        </PurchasedContext.Provider>
    )
}
export default PurchasedProvider;