import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/league/:id">
          <LeagueDetails/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;