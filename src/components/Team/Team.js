import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import './team.css';

const Team = ({ teams }) => {
    return (
        <Container className="mt-4 pt-4">
            <h1 className="my-3 text-primary">Our Teams</h1>
            <div className="team-container mb-3">
                {
                    teams?.map(team => {
                        return (
                            <div className="team">
                                <div className="img-container">
                                    <img className="img-fluid" src={team.image} alt={team.title} />
                                </div>
                                <div className="px-2 text-secondary bg-secondary text-white">
                                    <h5 className="text-warning text-capitalize">{team.name}</h5>
                                    <p className="text-capitalize my-0 py-0">{team.role}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Container >
    )
}

export default Team;
