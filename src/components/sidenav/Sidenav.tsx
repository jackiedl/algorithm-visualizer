import React, {} from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function Sidenav(props:any) {

  return (
    <div className="sidenav">
      <MainHeader close={props.close} />
      <div id="sep"></div>
      <SubHeader name={"Bubble Sort"} />
    </div>
  );
}

export default Sidenav;