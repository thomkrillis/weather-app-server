import { mocked } from 'ts-jest/utils';

import OpenWeatherMapClient from './open-weather-map';
import OpenWeatherMap from '../../../external/open-weather-map';
import { sample } from '../../../external/open-weather-map/sample';

jest.mock('../../../external/open-weather-map');
const mockedOpenWeatherMap = mocked(OpenWeatherMap, true);
beforeEach(() => {
  mockedOpenWeatherMap.mockClear();
});

test('mock class constructor called', () => {
  new OpenWeatherMapClient();
  expect(OpenWeatherMap).toHaveBeenCalledTimes(1);
});

test('get returns the correctly remapped object', async () => {
  const client = new OpenWeatherMapClient();
  const instance = mockedOpenWeatherMap.mock.instances[0];
  instance.get = jest.fn(() => {
    return new Promise((resolve) => {
      resolve(sample);
    });
  });
  const x = await client.get();
  const expected = {
    city: sample.name,
    description: sample.weather[0].description,
    temperature: sample.main.temp,
    temperature_feels_like: sample.main.feels_like,
    wind_direction: 'North',
    wind_speed: sample.wind.speed,
  };
  expect(x).toMatchObject(expected);
});
