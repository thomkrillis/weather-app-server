import { Weather, WeatherClient } from './types';

class WeatherService implements WeatherClient {
  client: WeatherClient;

  constructor(client: WeatherClient) {
    this.client = client;
  }

  async get(query: string): Promise<Weather> {
    return this.client.get(query);
  }
}

export default WeatherService;
