import * as express from 'express';
import { formatApplicationError } from '../../errors';

import WeatherService from '../../services/weather';
import OpenWeatherMapClient from '../../services/weather/clients/open-weather-map';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query || typeof query !== 'string') {
      res.status(400).send({
        errors: [
          {
            'q': 'query param must be non-empty string',
          },
        ],
      });
      return;
    }
    const service = new WeatherService(new OpenWeatherMapClient());
    const data = await service.get(query);
    res.json({ data });
  } catch (e) {
    res.status(400).send({
      errors: [formatApplicationError(e)],
    });
  }
});

export default router;
