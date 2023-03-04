import React from 'react';
import "./Banner.css";





function Banner() {


  function truncate(string, n) {

    return string?.length > n ? string.substr(0, n - 1) + "..." : string;

  }


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.worldvectorlogo.com/logos/netflix.svg")`,
        backgroundPosition: "center center",
      }}

    >
      <div className='banner__contents'>
        <hi className="banner__title">Movie Name</hi>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>


        <div className='banner__description'>This is a test discription
        </div>
        <div className='banner__fadeBottom' />

      </div>

    </header>

  );
}

export default Banner;