import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoPage } from './pages/Todos/TodoPage';
import { Navigation } from './components/Nav';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/todos'>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
};
