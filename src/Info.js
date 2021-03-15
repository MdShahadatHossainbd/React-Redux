import React from 'react';
const Info = ({ info }) => {
    const infoList = info.map(info => {
      return (
        <div className="info">
          <div>Name: { info.name }</div>
          <div>Age: { info.age }</div>
          <div>Dis: { info.dis }</div>
        </div>
      )
    })
    return (
      <div className="info-list">
        { infoList }
      </div>
    )
  }

export default Info