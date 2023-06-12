import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import OtherComponent from './OtherComponent';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/other" component={OtherComponent} />
      </Switch>
    </Router>
  );
};

export default AppRouter;