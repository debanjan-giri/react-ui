export const setLocalStorage = (key, user) => {
  try {
    localStorage.setItem(key, user);
  } catch (error) {
    console.error("Failed to set user in localStorage", error);
  }
};

export const clearLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove user from localStorage", error);
  }
};

export const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Failed to get user from localStorage", error);
    return null;
  }
};
