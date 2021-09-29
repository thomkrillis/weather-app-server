import * as express from 'express';
import { allowCORS } from '../middleware/cors';

import health from './health';
import ping from './ping';
import weather from './weather';

const app = express();

app.use(allowCORS);

app.use('/health', health);
app.use('/ping', ping);
app.use('/weather', weather);

export default app;
