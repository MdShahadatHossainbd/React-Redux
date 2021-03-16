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
  addInfo = (infor) => {
infor.id = Math.random();
let info = [...this.state.info,infor];
this.setState({
  info: info
})
}
deleteInfo = (id) => {
console.log(id)
}
deleteInfo = (id) => {
  let info = this.state.info.filter(infor => {
    return infor.id != id
  });
  this.setState({
    info: info
  })
}
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Info deleteInfo={this.deleteInfo} info={this.state.info}/>
        <AddInfo addInfo={this.addInfo}/>
      </div>
    );
  }
}

export default App;
