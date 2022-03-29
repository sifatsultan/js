import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";

class LocationInput extends React.Component{
  render(){
    return(
      <input></input>
    )
  }

}


class App extends React.Component {

  constructor(){
    
    super(props);
    this.state = {
      location: 'dhaka',
      weather: {},
      photos: []
    }
  }

  fetchWeather() {
    // fetch weather information
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&APPID=A1382b67f75f3c30da10c78b2ed7394f&units=metric`
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
      .then((resJson) => {
        this.setState({
          weather: resJson
        })
        console.log(resJson);
      })
      .catch((error) => { console.log(error) })


      // fetch photos
      fetch(
        `https://api.unsplash.com/search/photos?query=${this.state.location}&client_id=D28SLZa0lvwnvQtScVBZH57EiTX6LAu428df3SZotp0`
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
      .then((resJson) => {
        this.setState({
          photos: resJson
        })
        console.log(resJson);
      })
      .catch((error) => { console.log(error) })
  }



  render(){
    <button onClick={this.fetchWeather}></button>
  }

  return 
    
}


export default App;