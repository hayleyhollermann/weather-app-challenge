import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    forecast: reduxState.forecast,
});

class ThreeDayForecast extends Component {

    render() {
        return (
            <ul className="ThreeDayForecast">
                {this.props.threeDays.map((forecast) => 
                    <li className="table-row">
                        <div className="col col-1">
                            {forecast.date}
                        </div>
                        <div className="col col-2">
                            <img src={forecast.day.condition.icon} alt={forecast.day.condition.text}/>
                        </div>
                        <div className="col col-3">
                            {forecast.day.maxtemp_f}&deg;F
                        </div>
                        <div className="col col-4">
                            {forecast.day.mintemp_f}&deg;F
                        </div>
                        <div className="col col-5">
                            {forecast.day.totalprecip_in}in
                        </div>
                        <div className="col col-6">
                            {forecast.day.avghumidity}%
                        </div>
                        <div className="col col-7">
                            {forecast.day.maxwind_mph}mph
                        </div>
                    </li>
                )}
            </ul>
        );
    }

}

export default (connect(mapStateToProps)(ThreeDayForecast));
