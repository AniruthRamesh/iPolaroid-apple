import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveDataToAsyncStorage(dataArray) {
    try {
      const jsonString = JSON.stringify(dataArray);
      await AsyncStorage.setItem('data', jsonString);
      
    } catch (error) {
      // Handle errors here
      console.error('Error saving data to AsyncStorage:', error);
    }
  }

export default saveDataToAsyncStorage;