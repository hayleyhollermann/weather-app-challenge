import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    forecast: reduxState.forecast,
});

class CurrentWeather extends Component {

    render() {
        return (
            <div className="CurrentWeather">
                <img id="current-weather-icon" src={this.props.current.condition.icon} alt={this.props.current.condition.text} />
                <h2>{this.props.current.temp_f}&deg;F</h2>
                <p>Feels Like: {this.props.current.feelslike_f}&deg;F</p>
                <p>Humidity: {this.props.current.humidity}</p>
                <p>Wind: {this.props.current.gust_mph}mph</p>
            </div>
        );
    }

}

export default (connect(mapStateToProps)(CurrentWeather));
