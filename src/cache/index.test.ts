import MemoryCache from '.';

type SampleData = {
  name: string;
};

const k = 'hall';
const sample: SampleData = {
  name: 'Albert Hall',
};

test('get returns undefined when entry missing', async () => {
  const cache = new MemoryCache<SampleData>();
  const missingEntry = cache.get(k);
  expect(missingEntry).toBeUndefined();
});

test('set and get returns entry', async () => {
  const cache = new MemoryCache<SampleData>();
  cache.set(k, sample);
  const cachedEntry = cache.get(k);
  expect(cachedEntry).toMatchObject(sample);
});

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

test('set and get returns undefined after ttl', async () => {
  const cache = new MemoryCache<SampleData>(300);
  cache.set(k, sample);
  await sleep(1000);
  const missingEntry = cache.get(k);
  expect(missingEntry).toBeUndefined();
});
