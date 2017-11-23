import '../Styles/normalize.css';
import '../Styles/App.css';
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
      list: {},
      selectedDate: {},
      selectedRegion: {},
      arrowPosition: 250
    };

    this.setDate = this.setDate.bind(this);
    this.setRegion = this.setRegion.bind(this);
  }

  setDate(date) {
    this.setState({
      selectedDate: date,
      arrowPosition: 450
    });
  }

  setRegion(region) {
    console.log('region', region);
    this.setState({
      selectedRegion: region,
      arrowPosition: 900
    });
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
      console.log(skiData)
    })
  }

  render() {    
    return (
      <div className="App">
        <div className="arrow" style={{top: this.state.arrowPosition + "px"}}></div>
        <Header />
        <Calendar setDate={this.setDate} />
        <Map setRegion={this.setRegion}/>
        <List />
        <DetailedInfo />
      </div>
    );
  }
}

export default App;
