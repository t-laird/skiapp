import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'


class DetailedInfo extends Component {
  constructor () {
    super ();
  }


  render () {
    return (
      <div>
        DetailedInfo
        <TodaysWeather />
      </div>
    )
  }
}

export default DetailedInfo;