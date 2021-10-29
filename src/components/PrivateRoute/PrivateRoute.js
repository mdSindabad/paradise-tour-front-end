import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center mt-5 vh-100">
                <Spinner animation="border" variant="warning" />
            </div>
        )
    } else {
        return (
            <Route
                {...rest}
                render={
                    ({ location }) => (
                        user.email ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        )
                    )
                }

            />
        )
    }
}

export default PrivateRoute;