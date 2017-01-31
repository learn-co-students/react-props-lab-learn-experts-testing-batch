import React from 'react';

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <h3>Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</h3>
        <h4>Available in {this.props.colors.join(', ')}</h4>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;
