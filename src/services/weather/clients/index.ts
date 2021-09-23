import { Weather } from '../types';

interface WeatherClient {
  get(): Promise<Weather>;
}

export default WeatherClient;
