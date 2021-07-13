import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">This is a Home Page</Route>
      <Route exact path="/starred">This is a Starred</Route>
      <Route>This is 404 console</Route>
    </Switch>
  );
}

export default App;
