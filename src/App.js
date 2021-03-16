import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Info from './Info';

class App extends Component {
  state = {
    info: [
      { name: 'Shahadat', age: 23, dis: 'Noakhali', id: 1 },
      { name: 'Jahid', age: 22, dis: 'tangail', id: 2 },
      { name: 'Rashed', age: 19, dis: 'neoga', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Info info={this.state.info}/>
        <AddInfo/>
      </div>
    );
  }
}

export default App;
