import { Weather } from '../types';

interface WeatherClient {
  get(query: string): Promise<Weather>;
}

export default WeatherClient;
