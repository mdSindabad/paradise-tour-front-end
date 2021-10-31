import { useContext } from "react";
import { PurchasedContext } from "../contexts/PurchasedProvider";

const usePurchased = () => {
    return useContext(PurchasedContext);
}
export default usePurchased;