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
        <p>{props.error}</p>
      </div>
    )}
  </div>
);

Weather.propTypes = {
  city: PropTypes.object.isRequired,
  country: PropTypes.object.isRequired,
  sunset: PropTypes.object.isRequired,
  pressure: PropTypes.object.isRequired,
  temp: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};
export default Weather;
