import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import NewTest from './NewTest'

class App extends Component {
  render() {
    return (
      <div className="App">

        <NewTest/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Test/>

      </div>
    );
  }
}

export default App;
