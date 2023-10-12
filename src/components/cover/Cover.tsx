import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { algorithm } from "../../redux/features/boxSlice";


function Cover(){
  const alg = useAppSelector(algorithm);

  return (
    <div id="cover">
      <div className="info-parent">
        <div className="sort-description">
          <div className="">DESCRIPTION</div>
          {
            alg.description.map((value:string, idx:number) => (
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
                <td>{alg.average}</td>
              </tr>
              <tr>
                <th>Best Case</th>
                <td>{alg.best}</td>
              </tr>
              <tr>
                <th>Worst Case</th>
                <td>{alg.worst}</td>
              </tr>
              <tr>
                <th>Space Complexity</th>
                <td>{alg.space}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-box">
        <div>
          IMPLEMENTATION
        </div>
        <div id="menu-code">
          <div id="code-content">
            <pre>
              <code id="code">
                {alg.code}
              </code>
            </pre>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Cover;