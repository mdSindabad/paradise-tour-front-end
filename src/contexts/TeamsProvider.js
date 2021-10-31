import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const TeamsContext = createContext();

const TeamsProvider = ({ children }) => {
    // local state
    const [teams, setTeams] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setIsloading(true);

        axios.get('http://localhost:5000/teams')
            .then(res => {
                setTeams(res.data);
                setIsloading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsloading(false);
            })
    }, []);
    return (
        <TeamsContext.Provider value={{ teams, isLoading, error }}>
            {children}
        </TeamsContext.Provider>
    )
}
export default TeamsProvider;