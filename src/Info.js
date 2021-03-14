import React, { Component } from 'react';

class Info extends Component{
  render(){
    const { name, age, dis } = this.props;
    return (
      <div className="info">
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Dis: { dis }</div>
      </div>
    )
  }
}

export default Info