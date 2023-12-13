import React from "react";
import { View,StyleSheet ,Text,TouchableOpacity,SafeAreaView} from "react-native";
import { Svg,Path } from "react-native-svg";

const CameraScreen = ({navigation}) => {
  const image = require("../../assets/images/onboarding.jpg");
  const style = StyleSheet.create({
        backButton:{
        padding: 10,
        },
    });
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
              <Text>cameraScreen</Text>

              <TouchableOpacity onPress={() => navigation.navigate("Preview", {image:image}) }>
                  <Text>navvv</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
};

export default CameraScreen;
