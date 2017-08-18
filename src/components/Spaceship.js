// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
        <div>
          <h1>In a galaxy far, far away...</h1>
          <p>A {this.props.colors} spaceship by the name of {this.props.name} was traveling at a speed of {this.props.speed} because its rockets were set to {this.props.hasRockets}</p>
        </div>
        )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
