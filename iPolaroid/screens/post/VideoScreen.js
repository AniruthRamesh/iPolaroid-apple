import React from "react";
import { View,StyleSheet,Image,Text,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const VideoScreen = ({navigation}) => {
    //change the image and also how we send the data.
    const imageP = require("../../assets/images/onboarding.jpg");
    return(
        <SafeAreaView>
            <View>
                <Text>VideoScreen</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Preview", {image:imageP}) }>
                    <Text>navvv</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default VideoScreen;