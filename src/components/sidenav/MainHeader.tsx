import React, {} from 'react';

import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';

function MainHeader(props:any){
  return(
    <div className="sidenav-title sidenav-title-main">
        <div>
          <SortIcon className="icon"/>
          Sorting
        </div>
        <div onClick={props.close}>
          <CloseIcon className="icon icon-btn"/>
        </div>
        
      </div>
  )
}

export default MainHeader;