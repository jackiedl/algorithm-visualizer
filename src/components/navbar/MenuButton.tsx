import React, {  } from 'react';

import { useAppDispatch } from "../../redux/app/hooks";
import { navActions } from '../../redux/features/navSlice';
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton(){

  const dispatch = useAppDispatch();

  return(
    <button className="navbar-item clickable-btn" onClick={() => dispatch(navActions.setOpen())}>
      <MenuIcon className="icon icon-btn"/>
    </button>
  )
}
export default MenuButton;