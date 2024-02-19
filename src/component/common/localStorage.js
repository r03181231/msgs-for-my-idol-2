// 로컬 스토리지 함수

// localStorage.getItem
export const getLocal = (key) => {
  const storageItems = JSON.parse(localStorage.getItem(key));
  return storageItems;
};

// localStorage.setItem
export const setLocal = (key, data) => {
  const storageItems = localStorage.setItem(key, JSON.stringify(data));
  return storageItems;
};

export const removeLocal = (key) => {
  const removeStorageItems = localStorage.removeItem(key);
  return removeStorageItems;
};
