import React from "react";
import { View, Image, StyleSheet,  SafeAreaView } from "react-native";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Svg, { Path } from "react-native-svg";   
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';



const Login = ({navigation}) => {     
    
    async function onAppleButtonPress() {
        console.log("apple button pressed");
        try {
            // Start the Apple sign-in request
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });
          
            // Ensure Apple returned a user identityToken
            if (!appleAuthRequestResponse.identityToken) {
                throw 'Apple Sign-In failed - no identity token returned';
            }
    
            // Create a Firebase credential from the response
            const { identityToken, nonce } = appleAuthRequestResponse;
            const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    
            // Sign the user in with the credential
            const userCredential = await auth().signInWithCredential(appleCredential);
            
            // Store user data in AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(userCredential.user));

        
            // Navigate to the home screen
            navigation.navigate('Tab'); // Replace 'Home' with your home screen's name
        } catch (error) {
            console.error(error);
            // Handle errors as needed
        }
    }
    
      
      
    const style = StyleSheet.create({
        card:{
            padding:20
        },

        container:{
            flex:1,
            justifyContent: 'center', 
            alignItems: 'center',
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
        <SafeAreaView style={{flex:1}}>
            <BackButton navigation={navigation}/>

            <View style={style.container}>
                <View style={style.card}>
                    <Card image={"https://images.unsplash.com/photo-1551225471-e45c367f3b89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} caption={"Capture your memories!"} />
                </View>
                
                <View style={style.button}>
                    <CustomButton callback={async ()=>onAppleButtonPress()} text={"Sign In with Apple"}/> 
                </View>
            </View>
            
        </SafeAreaView>

    );
}

export default Login;