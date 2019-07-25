import React, { useState, createContext } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f5148888e5f80084290b230ff7a77082';

export const WeatherCtx = createContext('');

const App = props => {
  const [state, setState] = useState({
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  });

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      setState({
        temprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter the value.'
      });
    }
  };
  return (
    <React.Fragment>
      <WeatherCtx.Provider
        value={{
          data: state,
          getWeather
        }}
      >
        {props.children}
      </WeatherCtx.Provider>
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Titles />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form />
                  <Weather />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
