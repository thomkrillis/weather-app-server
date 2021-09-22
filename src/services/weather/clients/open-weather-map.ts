import OpenWeatherMap from '../../../external/open-weather-map';
import { OpenWeatherResponse } from '../../../external/open-weather-map/types';
import { Weather } from '../types';

const mapData = (data: OpenWeatherResponse): Weather => {
  return {
    description: data.weather.length ? data.weather[0].description : 'unknown',
    temperature: data.main.temp,
  };
};

class OpenWeatherMapClient {
  client: OpenWeatherMap;
  
  constructor() {
    this.client = new OpenWeatherMap();
  }

  async get() {
    const data = await this.client.get();
    return mapData(data);
  }
}

export default OpenWeatherMapClient;
