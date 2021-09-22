import OpenWeatherMap from '.';
import { sample } from './sample';

test('get returns an object', async () => {
  const client = new OpenWeatherMap();
  const x = await client.get();
  expect(x).toBe(sample);
});