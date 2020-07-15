import AsyncStorage from "@react-native-community/async-storage";

const save = async (storageKey, value) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    console.log("Data successfully saved!");
    console.log(`${storageKey} : ${value}`);
  } catch (e) {
    console.log("Failed to save data!");
    console.log(`${storageKey} : ${value}`);
  }
};

const get = async (storageKey) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);

    console.log("Get result:");
    console.log(`${storageKey}: ${value}`);

    if (value != null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (e) {
    console.log(`Failed to get data from ${storageKey}`);
  }
};

const remove = async (storageKey) => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    console.log(`Failed to remove ${storageKey}`);
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage data cleared successfully");
  } catch (e) {
    console.log("Failed to clear AsyncStorage data");
  }
};

const api = {
  save,
  get,
  remove,
  clearStorage,
};

export default api;
