import '../Styles/App.scss';
import React, { Component } from 'react';
import DetailedInfo from './DetailedInfo';
import Header from './Header';
import Calendar from './Calendar';
import List from './List';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calendar />
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
