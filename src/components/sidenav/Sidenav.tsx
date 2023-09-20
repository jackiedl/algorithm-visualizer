import React, {} from 'react';

import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Sidenav(props:any) {

  return (
    <div className="sidenav">

      <CloseIcon className="icon icon-btn sidenav-close" onClick={props.close}/>
   
      <MainHeader name={"Sorting"} icon={<SortIcon className="icon"/>}/>
      <SubHeader name={"Bubble Sort"} />
      <SubHeader name={"Quick Sort"} />
      <MainHeader name={"Search"} icon={<ManageSearchIcon className="icon"/>}/>
    </div>
  );
}

export default Sidenav;