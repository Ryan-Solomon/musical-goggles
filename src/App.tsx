import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/todos'>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
};
