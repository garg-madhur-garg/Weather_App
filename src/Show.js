import React, { Component } from "react"
class Show extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let queries = this.props.query;
        let temperature = this.props.temperature;
        let weather = this.props.weather;
        let wind_speed = this.props.wind_speed;
        let visibility = this.props.visibility;
        let humidity = this.props.humidity;
        if (queries !== "") {
            return (
                <div id="main">
                    <center>
                        <div id="main2">
                            <div>
                            <h3>Temperature : {temperature}<sup>0</sup>C</h3>
                            <h3>Weather :     {weather}</h3>
                            <h3>Wind_speed : {wind_speed}mps</h3>
                            <h3>Visibility : {visibility}m</h3>
                            <h3>Humidity : {humidity}%</h3>
                            </div>
                            
                            {/* <h3>Temperature:{temperature}<sup>0</sup>C</h3>
                            <h3>Weather:  {weather}</h3>
                            <h3>Wind_speed:  {wind_speed}</h3>
                            <h3>Visibility:  {visibility}</h3>
                            <h3>Humidity:{humidity}</h3> */}
                        </div>
                    </center>
                </div>
            )
        }
        else {
            return (
                <div>
                    <center>
                        <h2>{temperature}</h2>
                        {/* <h3>ughlg</h3> */}
                    </center>
                </div>
            )
        }

    }
}

export default Show;