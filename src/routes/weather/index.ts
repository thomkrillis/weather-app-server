import * as express from 'express';

import WeatherService from '../../services/weather';
import OpenWeatherMapClient from '../../services/weather/clients/open-weather-map';

const router = express.Router();

router.get('/', async (req, res) => {
  const service = new WeatherService(new OpenWeatherMapClient());
  const data = await service.get();
  res.json(data);
});

export default router;
