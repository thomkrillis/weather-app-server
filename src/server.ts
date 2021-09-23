import router from './routes';

const port = 3000;

// TODO: more robust handling, graceful shutdown, forking?
router.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
