import React from "react";
import { View, Image, StyleSheet,  SafeAreaView } from "react-native";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Svg, { Path } from "react-native-svg";   
import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';

const Login = ({navigation}) => {      
      
    const style = StyleSheet.create({
        card:{
            padding:20
        },

        iphoneContainer:{
            width: 200,
            height: 200,
            alignSelf: 'center',
        },

        iphone:{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        },

        button:{
            padding: 20,
        },

        svg:{
            position: 'absolute',
            top: '47%', // adjust these values according to your needs
            left: '47%',
            transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
        }
    });
    const image = require('../assets/images/sign_in.jpg');

    return (
        <SafeAreaView>
            <BackButton navigation={navigation}/>

            <View style={style.card}>
                <Card image={image} caption={"Capture your memories!"} />
            </View>

            <View style={style.iphoneContainer}>
                <Image source={require('../assets/images/iphone.png')} style={style.iphone}/>
                <Svg height="35" width="35" viewBox="0 0 384 512" style={style.svg}>
                    <Path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="#000" />
                </Svg>
            </View>
            
            <View style={style.button}>
                {/* when clicking this button, make the sign in with apple and then navigate to home (ask for face id
                    and everytime login with face id) */}

                    {/* for now it is navigating directly to tabs */}
                    {/* check if the below works properly */}
                <CustomButton callback={async ()=>navigation.navigate("Tab")} text={"Sign In with Apple"}/>
            </View>
            
        </SafeAreaView>

    );
}

export default Login;