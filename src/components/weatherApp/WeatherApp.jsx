import React from 'react'
import './WeatherApp.css'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import search from './assets/search.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'

const WeatherApp = () => {

    let api_key = "2eb5ff262f76dab6e94bcf89ff165519";

    const search = async () =>{
        const element = document.getElementsByClassName("cityName");
        if(element[0].value === " "){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);

        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temp[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;

    }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityName' placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloud} alt="cloud Icon" />
      </div>

      <div className="weather-temp">24</div>
      <div className="weather-location">london</div>

      <div className="data-container">
        <div className="element">
            <img src={humidity} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>

        <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">18km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;
