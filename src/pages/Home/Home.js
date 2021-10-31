import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import Destination from '../../components/Destination/Destination';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import RecentTour from '../../components/RecentTour/RecentTour';
import Team from '../../components/Team/Team';
import useServices from '../../hooks/useServices';
import useTeams from '../../hooks/useTeams';
import './home.css';

const Home = () => {
    // context hook
    const { isLoading, error, services } = useServices();
    const { isLoadingTeam, teams } = useTeams();

    return (
        <>
            {
                isLoading ? <div className="vh-100 d-flex justify-content-center mt-5">
                    <Spinner className="mt-5" animation="border" variant="warning" />
                </div> :
                    error ? <div className="vh-100 d-flex justify-content-center align-items-center">
                        <Alert variant="danger">
                            {error}!
                        </Alert>
                    </div> :
                        <div className="mb-3">
                            <HomeCarousel services={services} />
                            <Container className="my-3 text-primary">
                                <h2>Our Services</h2>
                                <div className="home-services-container">
                                    {
                                        services?.slice(0, 3).map(service => {
                                            return (
                                                <Destination key={service.id} data={service} />
                                            )
                                        })
                                    }
                                </div>
                                <h2 className="mt-5">Recent Tours</h2>
                                <div className="tour-container my-3">
                                    {
                                        !isLoading && <RecentTour services={services.slice(0, 3)} />
                                    }
                                </div>
                                <div>
                                    {
                                        !isLoadingTeam && <Team teams={teams.slice(0, 3)} />
                                    }
                                </div>
                            </Container>
                        </div>
            }
        </>
    )
}

export default Home;
