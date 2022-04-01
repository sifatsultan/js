import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";

import iconRainy from './assets/rain.png'
import iconCloudy from './assets/partial_cloudy.png'
import iconSunny from './assets/sunny.png'

class LocationInput extends React.Component {
  render() {
    return (
      <input></input>
    )
  }

}



class CityCard extends React.Component {

  render() {
    return (
      <div className="city">
        <p className="city-temp">{this.props.temp}</p>
        <p className="city-name">{this.props.cityName}</p>
      </div>
    )


  }
}


class App extends React.Component {


  /*
  get location from input 
  fetch weather
    creater city obj with id, locaiton, weather and photos into cities with photos being null
  fetch photos
    get city with id, then set city with photo

  
  */
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      photos: [],
      cities: []
    }
  }

  fetchWeather(location) {

    console.log(this.state);
    // fetch weather
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=A1382b67f75f3c30da10c78b2ed7394f&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        }
        else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error! (wrong locaiton)")
          }
        }
        alert("Oops, there seems to be an errorr");
        throw new Error("You have an error")
      })
      .then((weatherObj) => {        
        var citiesObj = this.state.cities;
        citiesObj.push({
          location: location,
          weather: weatherObj,
        });
        this.setState({
          cities: citiesObj
        })
      })
      .catch((error) => { console.log(error) })}



  renderCityCards(){  

    var rows = []
    this.state.cities
      .map((city)=>{
        rows.push(<CityCard cityName={city.location} temp={city.weather.main.temp} icon={iconRainy} backgroundImage={city.photo}></CityCard>)
      })
    
      return  <ul className="cities">{rows}</ul>
  }

  submitCity() {

    let locationInput = document.getElementById("city");

    console.log(locationInput.value);

    this.setState({
      location: locationInput.value,
    })

    this.fetchWeather(locationInput.value);
  }


  render() {
    return (
      <div>
        <section className="top-banner">
          <div className="container">
            <h1 className="heading">Simple Weather App</h1>
            <div className="city-input">
              <input type="text" id="city" placeholder="Search for a city" />
              <button type="submit" onClick={() => { this.submitCity() }}>SUBMIT</button>
              <span className="msg"></span>
            </div>
          </div>
        </section>
        <section className="ajax-section">
          <div className="container">
            {this.renderCityCards()}

          </div>


        </section>
      </div>
    )
  }

}


export default App;