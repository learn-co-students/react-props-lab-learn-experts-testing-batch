const React = require('react')

class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets?: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;