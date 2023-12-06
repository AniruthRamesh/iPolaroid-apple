import React from "react";
import { Path,Svg } from "react-native-svg";
import { TouchableOpacity,SafeAreaView,View,StyleSheet } from "react-native";

const BackButton = ({navigation}) => {
    const style = StyleSheet.create({
        backButton:{
            padding: 10,
        }
    });

    return(
        <SafeAreaView>
            <View style={style.backButton}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Svg height="25" width="25" viewBox="0 0 24 24">
                        <Path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" fill="#000" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BackButton;