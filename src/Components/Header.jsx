import React, { Component } from 'react';
import '../Styles/Header.css';


class Header extends Component {
  constructor () {
    super ();
  }


  render () {
    return (
      <div className="Header">
        <h1>Powder Bird</h1>
      </div>
    )
  }
}

export default Header;