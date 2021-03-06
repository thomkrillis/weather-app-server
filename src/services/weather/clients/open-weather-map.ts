import OpenWeatherMap from '../../../external/open-weather-map';
import { OpenWeatherResponse } from '../../../external/open-weather-map/types';
import { Weather, WeatherClient } from '../types';

const kelvinToFarenheit = (kelvin: number): number => {
  return (kelvin - 273.15) * 1.8000 + 32.00;
};

const mapWindDirection = (deg: number): string => {
  const windCompass = {
    nne: 11.25,
    ene: 56.25,
    ese: 101.25,
    sse: 146.25,
    ssw: 191.25,
    wsw: 236.25,
    wnw: 281.25,
    nnw: 326.25,
  };
  if (deg < windCompass.nne || deg > windCompass.nnw) {
    return 'North';
  } else if (deg < windCompass.ene) {
    return 'North-East';
  } else if (deg < windCompass.ese) {
    return 'East';
  } else if (deg < windCompass.sse) {
    return 'South-East';
  } else if (deg < windCompass.ssw) {
    return 'South';
  } else if (deg < windCompass.wsw) {
    return 'South-West';
  } else if (deg < windCompass.wnw) {
    return 'West';
  } else if (deg < windCompass.nnw) {
    return 'North-West';
  } else {
    return 'unknown';
  }
};

const metersPerSecondToMilesPerHour = (mps: number): number => {
  return mps * 2.236936;
};

const mapData = (data: OpenWeatherResponse): Weather => {
  return {
    city: data.name,
    description: data.weather.length ? data.weather[0].description : 'unknown',
    temperature: kelvinToFarenheit(data.main.temp),
    temperature_feels_like: kelvinToFarenheit(data.main.feels_like),
    wind_direction: mapWindDirection(data.wind.deg),
    wind_speed: metersPerSecondToMilesPerHour(data.wind.speed),
  };
};

class OpenWeatherMapClient implements WeatherClient {
  source: OpenWeatherMap;
  
  constructor(source = new OpenWeatherMap()) {
    this.source = source;
  }

  async get(query: string): Promise<Weather> {
    const data = await this.source.get(query);
    return mapData(data);
  }
}

export default OpenWeatherMapClient;
