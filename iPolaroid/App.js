import { StatusBar } from 'react-native';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import { useEffect,useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login.js';
import OnBoarding from './screens/Onboarding.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getFeedData from './services/feedData.js';
import Tab from './screens/Tab.js';

export default function App() {
  const navigationRef = useNavigationContainerRef();


  useEffect(() => {
    const checkAuthState = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            
            const userData = JSON.parse(user);
            const uid = userData.uid;
            await AsyncStorage.setItem('uid', uid);

            // User is signed in, navigate to the home screen
            navigationRef.navigate('Tab');
            
        } else {
            // User is not signed in, navigate to the login screen
            navigationRef.navigate('Onboarding');
        }
    };

    const dataGetter = async () => {
        await getFeedData();
    } 

    dataGetter();

    checkAuthState();
}, []);




    const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
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