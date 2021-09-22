import * as express from 'express';

import health from './health';
import ping from './ping';
import weather from './weather';

const app = express();

app.use('/health', health);
app.use('/ping', ping);
app.use('/weather', weather);

export default app;
