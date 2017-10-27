import React, { Component } from 'react';
import './App.css';

import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
@inject('store')
@observer
class App extends Component {

  componentDidMount() {
      console.log(this.props.store.testData);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edi <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
