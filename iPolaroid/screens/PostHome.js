import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Post from "../screens/Post.js";
import CameraScreen from "./post/CameraScreen.js";
import VideoScreen from "./post/VideoScreen.js";
import LibraryScreen from "./post/LibraryScreen.js";
import Preview from "./post/Preview.js";
import PostPreview from "./post/PostPreview.js";
import PostData from "./post/PostData.js";

const PostHome = ({navigation,route}) => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
            <Stack.Screen name="PostPreview" component={PostPreview} />
            <Stack.Screen name="PostData" component={PostData} />
            <Stack.Screen name="Preview" component={Preview} />
            <Stack.Screen name = "LibraryScreen" component={LibraryScreen} />

          </Stack.Navigator>
    );
}


export default PostHome;