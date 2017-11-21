import '../Styles/DetailedInfo.css';
import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'


class DetailedInfo extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div className="detailed-block">
        <TodaysWeather />
        <div className="details-right">

          <div className="details-header">
            <img className="resort-logos" src="http://snocountry.com/ski_area_logos/303007logo.jpg" />
            <h2>Breckenridge</h2>
            <div className="details-powder-day">
              <h5>Next forecasted powder day:</h5>
              <h5 className="details-powder-day-date">Tuesday, November 14</h5>
            </div>
          </div>

          <div className="details-columns">

            <div className="left-border-box">
            </div>
            <div className="details-column-left">
              <h4>SNOW BASE: <span className="orange-span">31"</span></h4>
              <h4>CURRENT CONDITONS: <span className="grey-span">Powder</span></h4>
              <h4>LIFTS: <span className="grey-span">2 Open (out of 9)</span></h4>
              <h4>TRAILS: <span className="grey-span">14 Open (out of 117)</span></h4>
              <h4>LAST SNOW: <span className="grey-span">Nov 9</span><img src="/assets/blue-arrow.svg" /><span className="orange-span">2"</span></h4>
              <h4>LAST 48 HOURS SNOW: <span className="orange-span">3"</span></h4>
            </div>

            <div className="left-border-box">
            </div>
            <div className="details-column-right">
              <h6>Breckenridge</h6>
              <h6>1599 C Summit County Road</h6>
              <div className="hours-block">
                <h6 className="hours-opacity">Hours:</h6>
                <h6 className="hours-spacer">9am - 4pm weekdays</h6>
                <h6 className="hours-spacer">8:30am - 4pm weekends</h6>
              </div>
              <h6><a href="http://www.breckenridge.com/">http://www.breckenridge.com/</a></h6>
              <a><img src="http://www.snocountry.com/trail_maps/large_trail_maps/large_thumbnails/303007.gif" /></a>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default DetailedInfo;