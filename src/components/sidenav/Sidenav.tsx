import React, {} from 'react';

import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { navActions, sortAlgorithms, searchAlgorithms } from '../../redux/features/navSlice';
import { boxActions} from '../../redux/features/boxSlice';
import MainHeader from './MainHeader';

import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Sidenav() {
  const sort = useAppSelector(sortAlgorithms);
  const search = useAppSelector(searchAlgorithms);

  const dispatch = useAppDispatch();

  return (
    <div className="sidenav">
      <CloseIcon className="icon icon-btn sidenav-close" onClick={() => dispatch(navActions.setOpen())}/>

      <MainHeader name={"Sorting"} icon={<SortIcon className="icon"/>}/>
      {sort.map((name, idx) => (
        <div className="sidenav-title subtitle" key={"sort-"+idx} onClick={() => {
          dispatch(boxActions.updateAlgorithm(name));
          dispatch(navActions.setOpen());
        }}>{name}</div>
      ))}

      <MainHeader name={"Search"} icon={<ManageSearchIcon className="icon"/>}/>
      {search.map((name, idx) => (
        <div className="sidenav-title subtitle" key={"search-"+idx} onClick={() => {
          dispatch(boxActions.updateAlgorithm(name));
          dispatch(navActions.setOpen());
        }}>{name}</div>
      ))}
    </div>
  );
}

export default Sidenav;