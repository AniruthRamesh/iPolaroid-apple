import React from "react";
import { View,StyleSheet,Image,Text ,TouchableOpacity,SafeAreaView} from "react-native";
import Svg, { Path } from "react-native-svg";

const LibraryScreen = ({navigation}) => {
    const style = StyleSheet.create({
        backButton:{
        padding: 10,
        },
    });

    //change the image and also how we send the data.
    const imageP = require("../../assets/images/onboarding.jpg");
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={style.backButton}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Svg height="25" width="25" viewBox="0 0 24 24">
                        <Path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" fill="#000" />
                    </Svg>
                </TouchableOpacity>
            </View>
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