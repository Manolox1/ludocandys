import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Menu from './menu.js';
import Test from './Test.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/test" component={Test}/>
              <Route path="*" component={Menu}/>
          </Switch>
      </div>
    );
  }
}

export default App;
