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
                        <table>
                            <thead>
                                <th>
                                    Date
                                </th>                                
                                <th>
                                    Condition
                                </th>                                
                                <th>
                                    High
                                </th>
                                <th>
                                    Low
                                </th>
                                <th>
                                    Precipitation
                                </th>
                                <th>
                                    Humidity
                                </th>
                                <th>
                                    Wind
                                </th>
                            </thead>
                            <ThreeDayForecast threeDays={this.props.forecast.forecast.forecastday} />
                        </table>
                        {JSON.stringify(this.props.forecast.forecast.forecastday, null, 2)}
                    </div>
                    : ''
                }
            </div>
        );
    }

}

export default (connect(mapStateToProps)(Forecast));
