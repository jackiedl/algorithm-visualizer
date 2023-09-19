import React, {} from 'react';

import Navbar from '../navbar/Navbar';

function Home() {

  return (
    <div>
        <Navbar  />
        <div>
          <div id="box">
            <div>dropdown menu select algo</div>
            <div>menu icon to change settings</div>
            <div>visualizer container</div>
          </div>
        </div>
        <div id="cover"></div>
    </div>
  );
}

export default Home;
