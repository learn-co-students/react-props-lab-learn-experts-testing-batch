const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets && 'Equipped with Rockets'}</p>
        <p>Colors:
          {this.props.colors.map((color, index) => (
            <span key={index}>{color} </span>
          ))}
        </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  name: 'Millenium Falcon', 
  speed: '13 parcepts', 
  hasRockets: false, 
  colors: ['black', 'red']
};

module.exports = Spaceship;