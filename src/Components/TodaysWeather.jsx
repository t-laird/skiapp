import '../Styles/TodaysWeather.css';
import React, { Component } from 'react';

const TodaysWeather = (props) => {
  return (
    <div className="todays-weather">
      <div className="todays-weather-header">
        <h1><span className="big-caps">T</span>oday's <span className="big-caps">W</span>eather</h1>
        <div className="sub-title">
          <h2>snow</h2>
          <img src="/assets/snowflake-icon.svg" />
          <img id="blue-triangle" src="/assets/blue-triangle.svg" />
        </div>
      </div>
      <div className="todays-weather-body">
        <h4 className="top-alt"><span className="small-text">Peak</span> 12,402<span className="small-text">ft</span></h4>
        <h3 className="top-temp">24&deg;</h3>
        <h3 className="base-temp">31&deg;</h3>
        <h4 className="base-alt"><span className="small-text">Base</span> 9,615<span className="small-text">ft</span></h4>
      </div>
    </div>
  )
}

export default TodaysWeather;