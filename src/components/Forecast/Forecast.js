import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../CurrentWeather/CurrentWeather';


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
                        <CurrentWeather current={this.props.forecast.current}/>
                        <table>
                            <tbody>
                                
                            </tbody>
                        </table>
                        {JSON.stringify(this.props.forecast, null, 2)}
                    </div>
                    : ''
                }
            </div>
            // <div>
            //     {JSON.stringify(this.props.reduxState)}
            // </div>
        );
    }

}

export default (connect(mapStateToProps)(Forecast));
