import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedHome from "./feed/FeedHome";
import FeedInfo from "./feed/FeedInfo";
import fadeTransition from "../utils/transitionAnimation";


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
