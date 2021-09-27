import router from './routes';

const port = 3000;

if (!process.env.APPID) {
  throw new Error('Open Weather Map key not provided');
}

// TODO: more robust handling, graceful shutdown, forking?
router.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Example app listening at http://localhost:${port}`);
  } else {
    console.log('Server started');
  }
});
