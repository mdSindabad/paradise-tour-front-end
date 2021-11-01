import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Tours from './pages/Tours/Tours';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServicesProvider from './contexts/ServicesProvider';
import DestinationDetails from './pages/DestinationDetails/DestinationDetails';
import TeamsProvider from './contexts/TeamsProvider';
import PurchasedProvider from './contexts/PurchasedProvider';
import ManageOrders from './pages/ManageOrders/ManageOrders';

function App() {
  return (
    <AuthProvider>
      <ServicesProvider>
        <TeamsProvider>
          <PurchasedProvider>
            <Router>
              <Header />
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/destinations'>
                  <Destinations />
                </Route>
                <PrivateRoute path='/destination/:destinationId'>
                  <DestinationDetails />
                </PrivateRoute>
                <Route path='/tours'>
                  <Tours />
                </Route>
                <PrivateRoute path='/upcoming-tours'>
                  <ManageOrders />
                </PrivateRoute>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='*'>
                  <NotFound />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </PurchasedProvider>
        </TeamsProvider>
      </ServicesProvider>
    </AuthProvider>
  );
}

export default App;
