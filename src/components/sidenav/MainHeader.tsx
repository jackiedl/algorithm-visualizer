import React, {} from 'react';

function MainHeader(props:any){
  return(
    <div>
      <div className="sidenav-title">
          {props.icon}
          {props.name}
        </div>
      <div id="sep"></div>
    </div>
  )
}

export default MainHeader;