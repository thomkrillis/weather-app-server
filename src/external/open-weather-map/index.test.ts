import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import OpenWeatherMap from '.';
import { QUERY } from '../../constants';
import { sample } from './sample';

jest.mock('axios');
const mockedAxios = mocked(axios, true);

test('get returns an object', async () => {
  mockedAxios.create.mockReturnValue(mockedAxios);
  mockedAxios.get.mockResolvedValue({ data: sample });
  const client = new OpenWeatherMap('fake-id');
  const x = await client.get(QUERY);
  expect(x).toMatchObject(sample);
});