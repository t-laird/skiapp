import '../Styles/App.scss';
import React, { Component } from 'react';
import DetailedInfo from './DetailedInfo';
import Header from './Header';
import Calendar from './Calendar';
import List from './List';
import Map from './Map';
import scKey from './apiKey';
import cleanSkiData from './CleanData';

class App extends Component {
  constructor () {
    super();

    this.state = {
      detailedInfo: {},
      restortInfo: {},
      list: {}
    }
  }

  // componentDidMount() {
  //   this.fetchRegion();
  // }

  fetchRegion() {
    fetch(
      `http://feeds.snocountry.net/conditions.php?regions=rockies&${scKey}`
      )
    .then(data => data.json())
    .then(data => {
      const skiData = cleanSkiData(data)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Calendar />
        <List />
        <Map />
        <DetailedInfo />
      </div>
    );
  }
}

export default App;
