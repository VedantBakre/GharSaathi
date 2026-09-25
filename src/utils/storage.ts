export const setStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export const getStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const clearAllStorage = (): void => {
  const keysToRemove = Object.keys(localStorage).filter(key => key.startsWith('gharsaathi-'));
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
};
