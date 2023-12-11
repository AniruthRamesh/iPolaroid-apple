import { StatusBar } from 'react-native';
import { StyleSheet} from 'react-native';
import { useEffect} from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {store,persistor} from './store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Login from './screens/Login.js';
import OnBoarding from './screens/Onboarding.js';
import Tab from './screens/Tab.js';
import { enableScreens } from 'react-native-screens';
import Splash from "./screens/Splash.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {

    if (Platform.OS === "ios") {
      enableScreens(false);
    }
  

}, []);

  const Stack = createNativeStackNavigator();
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }} initialRouteName='Splash'>
            
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tab" component={Tab} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
   </Provider> 
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});