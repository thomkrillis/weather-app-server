import * as express from 'express';

import WeatherService from '../../services/weather';

const router = express.Router();

router.get('/', async (req, res) => {
  const service = new WeatherService();
  const data = await service.get();
  res.json(data);
});

export default router;
