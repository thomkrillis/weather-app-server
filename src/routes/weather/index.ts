import * as express from 'express';
import { ErrorResponse, formatApplicationError } from '../../errors';

import WeatherService from '../../services/weather';
import OpenWeatherMapClient from '../../services/weather/clients/open-weather-map';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query || typeof query !== 'string') {
      const errorResponse: ErrorResponse = {
        errors: [
          {
            'q': 'query param must be non-empty string',
          },
        ],
      };
      res.status(400).send(errorResponse);
      return;
    }
    const service = new WeatherService(new OpenWeatherMapClient());
    const data = await service.get(query);
    res.json({ data });
  } catch (e) {
    const errorResponse: ErrorResponse = {
      errors: [formatApplicationError(e)],
    };
    res.status(400).send(errorResponse);
  }
});

export default router;
