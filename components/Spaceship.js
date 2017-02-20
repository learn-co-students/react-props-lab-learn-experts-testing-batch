const React = require('react');

class Spaceship extends React.Component {
    render() {
        return (
            <div className="spaceship">
                <ul>
                    <li><h1>{this.props.name}</h1></li>
                    <li>Speed: {this.props.speed}</li>
                    <li>Has Rockets: {this.props.hasRockets}</li>
                    <li>Colors: {this.props.colors}</li>
                </ul>
            </div>
        )
    }
}
Spaceship.defaultProps = {
    hasRockets: false,
    colors: ['black', 'red']
}

module.exports = Spaceship
