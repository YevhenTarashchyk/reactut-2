import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Form = props => (
  <form onSubmit={props.gettingWeather}>
    <input type="text" name="city" placeholder="Город" />
    <button type="submit">Получить погоду</button>
  </form>
);

Form.propTypes = {
  gettingWeather: PropTypes.func.isRequired
};
export default Form;
