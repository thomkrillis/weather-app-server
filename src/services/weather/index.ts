import WeatherClient from './clients';
import { Weather } from './types';

class WeatherService implements WeatherClient {
  client: WeatherClient;

  constructor(client: WeatherClient) {
    this.client = client;
  }

  async get(): Promise<Weather> {
    return this.client.get();
  }
}

export default WeatherService;
