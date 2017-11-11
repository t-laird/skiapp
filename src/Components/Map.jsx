import React, { Component } from 'react';
import '../Styles/Map.css';


class Map extends Component {
  constructor (props) {
    super (props);

    this.state = {
      imgSrc: '/assets/map-none.png'
    }
  }

  handleMouseOver(region) {
    this.setState({
      imgSrc: `/assets/map-${region}.png`
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: '/assets/map-none.png'
    });
  }

  render () {
    return (
      <div className="map">
        <img className="map-image"
             alt="Mountain States"
             src={this.state.imgSrc}
             usemap="#rockies_map"
             width="335"
        />
        <map name="rockies_map">
          <area className="wyoming-hover" 
                shape="poly"
                coords="103,27, 263,27, 263,154, 103,154"
                src={this.state.imgSrc}
                onMouseOver={this.handleMouseOver.bind(this, 'wyoming')}
                onMouseOut={this.handleMouseOut.bind(this)}
          />
          <area className="utah-hover" 
                shape="poly"
                coords="32,123, 103,123, 103,154, 149,154, 149,274, 32,274"
                src={this.state.imgSrc}
                onMouseOver={this.handleMouseOver.bind(this, 'utah')}
                onMouseOut={this.handleMouseOut.bind(this)}
          />
          <area className="colorado-central-hover" 
                shape="poly"
                coords="149,154, 311,154, 311,260, 294,245, 271,231, 245,220, 224,215, 200,214, 183,214, 166,215, 149,217"
                src={this.state.imgSrc}
                onMouseOver={this.handleMouseOver.bind(this, 'colorado-central')}
                onMouseOut={this.handleMouseOut.bind(this)}
          />
          <area className="colorado-southern-hover" 
                shape="poly"
                coords="311,260, 294,245, 271,231, 245,220, 224,215, 200,214, 183,214, 166,215, 149,217, 149,274, 311,274"
                src={this.state.imgSrc}
                onMouseOver={this.handleMouseOver.bind(this, 'colorado-southern')}
                onMouseOut={this.handleMouseOut.bind(this)}
          />
          <area className="new-mexico-hover" 
                shape="poly"
                coords="149,274, 288,274, 288,287, 287,287, 287,413, 210,413, 213,419, 168,419, 168,428, 149,428,"
                src={this.state.imgSrc}
                onMouseOver={this.handleMouseOver.bind(this, 'new-mexico')}
                onMouseOut={this.handleMouseOut.bind(this)}
          />
        </map>

      </div>
    )
  }
}

export default Map;