import React from 'react';

import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";

import { CSSTransition } from 'react-transition-group';
import Sidenav from '../sidenav/Sidenav';
import MenuButton from './MenuButton';
import { navActions, isOpen } from '../../redux/features/navSlice';

function Navbar() {
  const open = useAppSelector(isOpen);

  const dispatch = useAppDispatch();
  
  return (
    <div className="navbar">
      <MenuButton />
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
        <Sidenav/>
      </CSSTransition>
      {open ? <div className="overlay" onClick={() => dispatch(navActions.setOpen())}></div> : null}
    </div>
  );
}

export default Navbar;