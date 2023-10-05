import React, {} from 'react';

import Navbar from '../navbar/Navbar';
import Box from '../box/Box';

function Home() {

  return (
    <div>
        <Navbar  />
        <Box />
        <div id="cover">
          <div className="info-parent">
            <div className="sort-description">
              <div className="">DESCRIPTION</div>
              <p>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.</p>
              <p>The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist. It's available in several variants such as Gnome Sort.</p>
            </div>
            <div className="table-box">
              <div>COMPLEXITY</div>
              <table className="sort-table">
                <tbody>
                  <tr>
                    <th>Average Complexity</th>
                    <td>{"O(n"}<sup>2</sup>{")"}</td>
                  </tr>
                  <tr>
                    <th>Best Case</th>
                    <td>{"O(n"}<sup>2</sup>{")"}</td>
                  </tr>
                  <tr>
                    <th>Worst Case</th>
                    <td>{"O(n"}<sup>2</sup>{")"}</td>
                  </tr>
                  <tr>
                    <th>Space Complexity</th>
                    <td>{"O(n"}<sup>2</sup>{")"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="menu-box">
            
          </div>
        </div>
    </div>
  );
}

export default Home;
