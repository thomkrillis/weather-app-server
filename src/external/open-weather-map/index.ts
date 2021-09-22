import { sample } from './sample';
import { OpenWeatherResponse } from './types';

// Wraps the Open Weather Map API, found at https://openweathermap.org/current
class OpenWeatherMap {
  async get(): Promise<OpenWeatherResponse> {
    // TODO: replace sample w/ actual API call, deserialise response data
    return new Promise((resolve) => {
      resolve(sample);
    });
  }
}

export default OpenWeatherMap;
