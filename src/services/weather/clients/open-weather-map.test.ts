import { mocked } from 'ts-jest/utils';

import OpenWeatherMapClient from './open-weather-map';
import OpenWeatherMap from '../../../external/open-weather-map';
import { sample } from '../../../external/open-weather-map/sample';
import { QUERY } from '../../../constants';

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
  const x = await client.get(QUERY);
  // Some values are effectively snapshotted
  const expected = {
    city: sample.name,
    description: sample.weather[0].description,
    temperature: 74.58800000000005,
    temperature_feels_like: 73.99400000000009,
    wind_direction: 'South-West',
    wind_speed: 11.00572512,
  };
  expect(x).toMatchObject(expected);
});
