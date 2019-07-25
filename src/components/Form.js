import React, { useContext } from 'react';
import { WeatherCtx } from '../App';

const Form = () => {
  const ctx = useContext(WeatherCtx);
  const { getWeather } = ctx;
  return (
    <form onSubmit={getWeather}>
      <input type='text' name='city' placeholder='City...' />
      <input type='text' name='country' placeholder='Country...' />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
