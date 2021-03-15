import React, { Component } from 'react';

class Info extends Component{
  render(){
    const { info } = this.props;
    const infoList = info.map(info => {
      return (
        <div className="info">
          <div>Name: { info.name }</div>
          <div>Age: { info.age }</div>
          <div>Dis: { info.dis }</div>
        </div>
      )
    });
    return (
      <div className="info-list">
        { infoList }
      </div>
    )
  }
}

export default Info