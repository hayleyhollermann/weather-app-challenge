import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    forecast: reduxState.forecast,
});

class CurrentWeather extends Component {

    render() {
        return (
            <div className="CurrentWeather">
                <img src={this.props.current.condition.icon} />
                <p>{this.props.current.temp_f} Degrees Fahrenheit</p>
                <p>Feels Like: {this.props.current.feelslike_f} Degrees Fahrenheit</p>
                <p>Humidity: {this.props.current.humidity}</p>
                <p>Wind: {this.props.current.gust_mph}mph</p>
            </div>
        );
    }

}

export default (connect(mapStateToProps)(CurrentWeather));
