import React, { useContext } from 'react';
import { WeatherCtx } from '../App';

const Weather = () => {
  const ctx = useContext(WeatherCtx);
  const { city, country, temprature, humidity, description, error } = ctx;

  return (
    <div className='weather__info'>
      {city && country && (
        <p className='weather__key'>
          Location:
          <span className='weather__value'>
            {city},{country}
          </span>
        </p>
      )}
      {temprature && (
        <p className='weather__key'>
          Temperature:
          <span className='weather__value'>
            {temprature.toFixed(0.2)}&#8451;
          </span>
        </p>
      )}
      {humidity && (
        <p className='weather__key'>
          Humidity:
          <span className='weather__value'>{humidity}</span>
        </p>
      )}
      {description && (
        <p className='weather__key'>
          Condition:
          <span className='weather__value'>{description}</span>
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
