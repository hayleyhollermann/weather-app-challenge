import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ThreeDayForecast from '../ThreeDayForecast/ThreeDayForecast';


const mapStateToProps = reduxState => ({
    forecast: reduxState.forecast,
});

class Forecast extends Component {

    render() {
        return (
            <div className="Forecast">
                {this.props.forecast.location ?
                    <div className="show-forecast">
                        <h1>{this.props.forecast.location.name}, {this.props.forecast.location.region}</h1>
                        <CurrentWeather current={this.props.forecast.current} />
                        <ul className="forecast-table">
                            <li className="table-header">
                                <div className="col col-1">Date</div>                                
                                <div className="col col-2">Condition</div>                                
                                <div className="col col-3">High</div>
                                <div className="col col-4">Low</div>
                                <div className="col col-5">Precipitation</div>
                                <div className="col col-6">Humidity</div>
                                <div className="col col-7">Wind</div>
                            </li>
                        </ul>
                        <ThreeDayForecast threeDays={this.props.forecast.forecast.forecastday} />
                    </div>
                    : 
                    <div>
                        <h3>Search for your city above!</h3>
                        
                    </div>
                }
            </div>
        );
    }

}

export default (connect(mapStateToProps)(Forecast));
