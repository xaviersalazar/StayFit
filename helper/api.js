import AsyncStorage from "@react-native-community/async-storage";

const save = async (storageKey, value) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(value));
    console.log("Data successfully saved");
  } catch (e) {
    console.log(`Failed to save ${value} into ${storageKey}`);
  }
};

const read = async (storageKey) => {
  try {
    const value = await AsyncStorage.getItem(JSON.parse(storageKey));

    if (value !== null) {
      // Do something with previously stored value
    }
  } catch (e) {
    console.log(`Failed to read data from ${storageKey}`);
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
  read,
  clearStorage,
};

export default api;
