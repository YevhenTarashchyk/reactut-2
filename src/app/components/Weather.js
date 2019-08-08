import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Weather = props => (
  <div className="weather__info">
    {props.city && (
      <div>
        <p>
          Location: {props.city}, {props.country}{' '}
        </p>
        <p>Temperature:{props.temp}</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Weather;
