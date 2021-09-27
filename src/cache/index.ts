import { CacheEntry } from './types';

class MemoryCache<T> {
  cache: Record<string, CacheEntry<T>>;

  ttl: number;

  // default ttl 1h, 60*60*1000
  constructor(ttl = 3600000) {
    this.cache = {};
    this.ttl = ttl; 
  }

  get(k: string): T | undefined {
    if (this.cache[k]) {
      const current = new Date();
      if ((current.getTime() - this.cache[k].timestamp.getTime()) < this.ttl) {
        return this.cache[k].data;
      }
    }
    return undefined;
  }

  set(k: string, v: T): void {
    this.cache[k] = {
      data: v,
      timestamp: new Date(),
    };
  }
}

export default MemoryCache;