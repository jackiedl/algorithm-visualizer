import React, {useState} from 'react';

import { CSSTransition } from 'react-transition-group';
import Sidenav from '../sidenav/Sidenav';
import MenuButton from './MenuButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <MenuButton icon={<MenuIcon className="icon icon-btn"/>} open={()=>{setOpen(!open)}}/>
      <a href="/" className="navbar-item">
        ALGORITHM VISUALIZER
      </a>

      <CSSTransition
        in={open}
        out={!open}
        unmountOnExit
        timeout={500}
        classNames="sidenav-primary"
      >
        <Sidenav close={() => setOpen(!open)}/>
      </CSSTransition>
      {open ? <div className="overlay" onClick={() => setOpen(!open)}></div> : null}
    </div>
  );
}

export default Navbar;