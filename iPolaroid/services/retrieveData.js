import AsyncStorage from "@react-native-async-storage/async-storage";

async function getDataFromAsyncStorage() {
    try {
      const jsonString = await AsyncStorage.getItem('data');
      return jsonString != null ? JSON.parse(jsonString) : null;
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving data from AsyncStorage:', error);
      return null; // or handle the error as appropriate
    }
  }
  

  export default getDataFromAsyncStorage;