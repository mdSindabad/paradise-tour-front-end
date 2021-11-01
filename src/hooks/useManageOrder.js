import axios from "axios";
import usePurchased from "./usePurchased";

const useManageOrder = () => {
    const { purchased, setUpdate } = usePurchased();

    // status updater function
    const updateStatus = (id) => {
        const res = window.confirm("Do you want to update status?")
        if (res) {
            axios.put(`https://lit-castle-83888.herokuapp.com/update-status/${id}`, {
                status: "completed"
            })
                .then(res => {
                    setUpdate(true)
                })
                .catch(err => console.log(err))
        } else {
            return
        }
    };

    // order cancel function
    const cancelOrder = (id) => {
        const res = window.confirm("Do you want to cancel order?")
        if (res) {
            axios.delete(`https://lit-castle-83888.herokuapp.com/cancel-order/${id}`, {})
                .then(res => {
                    setUpdate(true)
                })
                .catch(err => console.log(err))
        } else {
            return
        }

    }

    return {
        updateStatus,
        cancelOrder
    }
}

export default useManageOrder;