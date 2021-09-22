import { Weather } from './types';
import OpenWeatherMapClient from './clients/open-weather-map';


class WeatherService {
  client: OpenWeatherMapClient;

  constructor(client?: OpenWeatherMapClient) {
    this.client = client || new OpenWeatherMapClient();
  }

  async get(): Promise<Weather> {
    return this.client.get();
  }
}

export default WeatherService;
