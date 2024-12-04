const memoizedFetch = () => {
  const cache = new Map();

  return async (url: string, options?: RequestInit) => {
    const key = `${url}-${JSON.stringify(options)}`;
    
    if (cache.has(key)) {
      return cache.get(key);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    cache.set(key, data);
    
    return data;
  };
};

export const fetchWithCache = memoizedFetch(); 