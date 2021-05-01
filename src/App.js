// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import Show from "./Show";

const api = {
  key: process.env.REACT_APP_USER_KEY,
  base: process.env.REACT_APP_USER_BASE
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {     //state stores dynamic data
      temperature: "",
      query: "",
      humidity: "",
      wind_speed: "",
      visibility: "",
      weather: ""
    };
    this.search = this.search.bind(this);    //Jo render ke inside hai only usi function ko bind karna pdega
  }

  // addItem(e){
  //   if(this._inputElement !== ""){

  //   }


  search(e) {
    // console.log(2+3);
    fetch(`${api.base}weather?q=${this.city.value}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (typeof(result.main) !== "undefined") {
          this.setState({
            humidity: result.main.humidity,
            wind_speed: result.wind.speed,
            visibility: result.visibility,
            weather: result.weather[0].description,
            temperature: result.main.temp,
            query: this.city.value

          });
        }
        else {
          this.setState({
            query: "",
            temperature: result.message

          });
        }
        
      });
    e.preventDefault();
  }

  render() {
    return (
      <div id="container">
        {/* <button onClick={this.search}>Get Temp</button> */}
        <form onSubmit={this.search}>
          <input id="input" ref={(a) => this.city = a} placeholder="Enter City Name">
          </input>
          {/* <button id="button" type="submit"></button> */}
          <i id="icon" type="submit" class="fas fa-search" onClick={this.search}></i>
          
        </form>
        <Show query={this.state.query} temperature={this.state.temperature} weather={this.state.weather} visibility={this.state.visibility} wind_speed={this.state.wind_speed} humidity={this.state.humidity} />
      </div>
    );

  }

};

export default App;

