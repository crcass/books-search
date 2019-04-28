import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteContainer from './components/SiteContainer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <SiteContainer>
      <Nav />
      <Hero />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route component={NotFound} />
      </Switch>
    </SiteContainer>
  </Router>
);

export default App;
