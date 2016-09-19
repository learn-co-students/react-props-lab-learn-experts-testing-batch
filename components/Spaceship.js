import React, {Component} from 'react'

class Spaceship extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has rockets: {this.props.hasRockets ? 'Yup' : "Naw"}</h3>
        <h3>Colors: {this.props.colors.join(', ')}</h3>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
