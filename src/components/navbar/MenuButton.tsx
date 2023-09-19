import React, {  } from 'react';

function MenuButton(props:any){
  return(
    <button className="navbar-item sidenav-btn" onClick={props.open}>
      {props.icon}
    </button>
  )
}
export default MenuButton;