import axios, { AxiosInstance } from 'axios';
import { sample } from './sample';
import { OpenWeatherResponse } from './types';
import MemoryCache from '../../cache';

// Wraps the Open Weather Map API, found at https://openweathermap.org/current
class OpenWeatherMap {
  appid: string;

  axiosInstance: AxiosInstance;

  cache: MemoryCache<OpenWeatherResponse>;

  private static instance: OpenWeatherMap;

  constructor(appid = process.env.APPID) {
    // Caching results, provide singleton to preserve cache
    if (OpenWeatherMap.instance) {
      return OpenWeatherMap.instance;
    }
    this.appid = appid;
    if (!this.appid) throw new Error('no appid provided in environment');

    this.axiosInstance = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5',
    });
    this.cache = new MemoryCache<OpenWeatherResponse>();
    OpenWeatherMap.instance = this;
  }

  async get(query: string, mock = false): Promise<OpenWeatherResponse> {
    // TODO: better mocking
    if (mock) {
      return new Promise((resolve) => {
        resolve(sample);
      });
    }
    const cached = this.cache.get(query);
    if (cached) {
      return cached;
    }
    const { data } = await this.axiosInstance.get(`/weather?q=${query}&appid=${this.appid}`);
    this.cache.set(query, data);
    return data;
  }
}

export default OpenWeatherMap;
