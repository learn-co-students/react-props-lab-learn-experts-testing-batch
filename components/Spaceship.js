import React from 'react';
import ReactDOM from 'react-dom';

class SpaceShip extends React.Component {

  render (){
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Has Rockets: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors.join(", ")}</h2>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  hasRockets: false,
  colors: ["black", "red"]
}

module.exports = SpaceShip;
