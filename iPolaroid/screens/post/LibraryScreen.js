import React from "react";
import { View,StyleSheet,Image,Text ,TouchableOpacity,SafeAreaView} from "react-native";


const LibraryScreen = ({navigation}) => {
    //change the image and also how we send the data.
    const imageP = require("../../assets/images/onboarding.jpg");
    return(
        <SafeAreaView>
            <View>
                <Text>libraryScreen</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Preview", {image:imageP}) }>
                    <Text>navvv</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LibraryScreen;