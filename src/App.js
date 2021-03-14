import React, { Component } from 'react';
import Info from './Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Info name="Shahadat" age="23" dis="Noakhali" />
        <Info name="Rasl" age="20" dis="Noakhali" />
      </div>
    );
  }
}

export default App;
