import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    forecast: reduxState.forecast,
});

class ThreeDayForecast extends Component {

    render() {
        return (
            <tbody className="ThreeDayForecast">
                {this.props.threeDays.map((forecast) => 
                    <tr>
                        <td>
                            {forecast.date}
                        </td>
                        <td>
                            <img src={forecast.day.condition.icon} alt={forecast.day.condition.text}/>
                        </td>
                        <td>
                            {forecast.day.maxtemp_f} Degrees
                        </td>
                        <td>
                            {forecast.day.mintemp_f} Degrees
                        </td>
                        <td>
                            {forecast.day.totalprecip_in}in
                        </td>
                        <td>
                            {forecast.day.avghumidity}%
                        </td>
                        <td>
                            {forecast.day.maxwind_mph}mph
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }

}

export default (connect(mapStateToProps)(ThreeDayForecast));
