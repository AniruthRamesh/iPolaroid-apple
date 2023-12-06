import { StatusBar } from 'react-native';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import { useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login.js';
import OnBoarding from './screens/Onboarding.js';
import Tab from './screens/Tab.js';
import firestore from '@react-native-firebase/firestore';

export default function App() {

  




    const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
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