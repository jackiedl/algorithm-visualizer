import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { complexity } from "../../redux/features/boxSlice";


function Cover(){
  const oNotation = useAppSelector(complexity);

  return (
    <div id="cover">
      <div className="info-parent">
        <div className="sort-description">
          <div className="">DESCRIPTION</div>
          {
            oNotation.description.map((value:string, idx:number) => (
              <p key={idx}>{value}</p>
            ))
          }
        </div>
        <div className="table-box">
          <div>COMPLEXITY</div>
          <table className="sort-table">
            <tbody>
              <tr>
                <th>Average Complexity</th>
                <td>{oNotation.average}</td>
              </tr>
              <tr>
                <th>Best Case</th>
                <td>{oNotation.best}</td>
              </tr>
              <tr>
                <th>Worst Case</th>
                <td>{oNotation.worst}</td>
              </tr>
              <tr>
                <th>Space Complexity</th>
                <td>{oNotation.space}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-box">
        
      </div>
  </div>
  )
}

export default Cover;