import OpenWeatherMap from '.';
import { QUERY } from '../../constants';
import { sample } from './sample';

test('get returns an object', async () => {
  const client = new OpenWeatherMap('fake-id');
  const x = await client.get(QUERY, true);
  expect(x).toMatchObject(sample);
});