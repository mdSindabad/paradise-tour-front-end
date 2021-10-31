import { useContext } from "react";
import { TeamsContext } from "../contexts/TeamsProvider";


const useTeams = () => {
    return useContext(TeamsContext);
}
export default useTeams;