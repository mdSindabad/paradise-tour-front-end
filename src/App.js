import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/destinations'>
          <Destinations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
