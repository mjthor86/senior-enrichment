import React from 'react';

const Home = () => (
  <div className="home">
    <div className="banner text-center text-inverted">
      <img src="logo.png" width="100" height="100" className="d-inline-block align-middle" alt="logo" />
      <h1>MHIAJS</h1>
      <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
    </div>
    <br />
    <br />
    <div className="about container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-auto">
          <img className="media-object founder" src="http://www.placecage.com/g/200/150" />
        </div>
        <div className="col-md-8">
          <p>A message from our founder:</p>
          <span>Network of wormholes shores of the cosmic ocean a billion trillion, the sky calls to us culture vastness is bearable only through love dream of the mind's eye. Vanquish the impossible, birth Jean-Francois Champollion light years realm of the galaxies across the centuries rich in mystery cosmos!</span>
        </div>
      </div>
      <br />
      <br />
      <div className="row justify-content-center align-items-end">
        <img src="logo.png" width="50" height="50" className="d-inline-block" alt="logo" />
      </div>
    </div>
  </div>
);

export default Home;
