import React from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView,FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedHome from "./feed/FeedHome";
import FeedInfo from "./feed/FeedInfo";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import fadeTransition from "../utils/transitionAnimation";
import { useEffect } from "react";


const Feed = ({navigation,route}) =>{
    const Stack = createNativeStackNavigator();
    

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator: fadeTransition.cardStyleInterpolator,
            transitionSpec: {
              open: fadeTransition.transitionSpec.open,
              close: fadeTransition.transitionSpec.close,
            },
          }}>
            <Stack.Screen name="FeedHome" component={FeedHome} />
            <Stack.Screen name="FeedInfo" component={FeedInfo} />

          </Stack.Navigator>
    );


};


export default Feed;
