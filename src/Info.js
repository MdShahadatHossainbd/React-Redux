import React from 'react';
const Info = ({ info }) => {
    //   if (info.age > 20){
    //     return (
    //       <div className="info" key= {info.id}>
    //         <div>Name: { info.name }</div>
    //         <div>Age: { info.age }</div>
    //         <div>Dis: { info.dis }</div>
    //       </div>
    //     )
    //   } else {
    //     return null
    //   }
    // });
    const infoList = info.map(info => {
      return info.age > 20 ? (
<div className="info" key= {info.id}>
            <div>Name: { info.name }</div>
           <div>Age: { info.age }</div>         
            <div>Dis: { info.dis }</div>      
            </div>
      ) : null;
    });

    return (
      <div className="info-list">
        { infoList }
      </div>
    )
  }

export default Info