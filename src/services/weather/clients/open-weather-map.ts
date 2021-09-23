import WeatherClient from '.';
import OpenWeatherMap from '../../../external/open-weather-map';
import { OpenWeatherResponse } from '../../../external/open-weather-map/types';
import { Weather } from '../types';

const mapData = (data: OpenWeatherResponse): Weather => {
  return {
    description: data.weather.length ? data.weather[0].description : 'unknown',
    temperature: data.main.temp,
  };
};

class OpenWeatherMapClient implements WeatherClient {
  source: OpenWeatherMap;
  
  constructor(source = new OpenWeatherMap()) {
    this.source = source;
  }

  async get(): Promise<Weather> {
    const data = await this.source.get();
    return mapData(data);
  }
}

export default OpenWeatherMapClient;
