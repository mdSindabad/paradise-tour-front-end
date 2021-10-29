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

function App() {
  return (
    <AuthProvider>
      <ServicesProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute path='/destinations'>
              <Destinations />
            </PrivateRoute>
            <PrivateRoute path='/destination/:destinationId'>
              <DestinationDetails />
            </PrivateRoute>
            <PrivateRoute path='/tours'>
              <Tours />
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
      </ServicesProvider>
    </AuthProvider>
  );
}

export default App;
