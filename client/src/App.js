import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Saved from './components/Saved';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/saved/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
