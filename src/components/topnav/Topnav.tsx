import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Topnav() {
  return (
    <div className="topnav">
      <button className="sidenav-btn topnav-element">
        <MenuIcon className="icon"/>
      </button>
      <a href="/" className="topnav-element">
        ALGORITHM VISUALIZER
      </a>
    </div>
  );
}

export default Topnav;