import React, { Component } from 'react';

import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = '8a7d7ce49a8d2a08c88abcbd45fd91c5';
class App extends Component {
  state = {
    temp: null,
    city: null,
    country: null,
    pressure: null,
    sunset: null,
    error: null
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await apiUrl.json();

      const { sunset } = data.sys;
      const date = new Date();
      date.setTime(sunset);
      const sunsetDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: ''
      });
    } else {
      this.setState({
        temp: '',
        city: '',
        country: '',
        pressure: '',
        sunset: '',
        error: 'PLS enter the value'
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Info />
                </div>
                <div className="col-md-7 form-container">
                  <Form gettingWeather={this.gettingWeather} />
                  <Weather {...this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
