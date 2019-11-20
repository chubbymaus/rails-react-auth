import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/dashboard'} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
