import { useContext } from "react";
import { ServicesContext } from "../contexts/ServicesProvider";

const useServices = () => {
    return useContext(ServicesContext);
}
export default useServices;