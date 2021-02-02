import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { Navigation } from './components/Nav';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/todos'>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
};
