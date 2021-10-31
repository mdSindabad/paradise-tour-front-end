import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const TeamsContext = createContext();

const TeamsProvider = ({ children }) => {
    // local state
    const [teams, setTeams] = useState({});
    const [isLoadingTeam, setIsloadingTeam] = useState(true);
    const [teamError, setTeamError] = useState('');

    useEffect(() => {
        setTeamError('');
        setIsloadingTeam(true);

        axios.get('http://localhost:5000/teams')
            .then(res => {
                setTeams(res.data);
                setIsloadingTeam(false);
            })
            .catch(err => {
                setTeamError(err.message);
                setIsloadingTeam(false);
            })
    }, []);
    return (
        <TeamsContext.Provider value={{ teams, isLoadingTeam, teamError }}>
            {children}
        </TeamsContext.Provider>
    )
}
export default TeamsProvider;