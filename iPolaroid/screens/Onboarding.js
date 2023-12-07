import React from "react";
import { View,  StyleSheet, Text,  TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import FastImage from "react-native-fast-image";


export default function OnBoarding({navigation}) {
    const onboardingImage = require('../assets/images/onboarding.jpg');
    return(
        <SafeAreaView>
            <View >
                <View style={style.horizontalDivider}/>
                <Text style={style.description}>
                    Preserve your memories 
                    {'\n'}
                    in polaroid style
                </Text>
                <View style={style.horizontalDividerWithoutPadding}/>
                
                
                <View style={style.card}>
                    <Card image={"https://images.unsplash.com/photo-1519038983316-43241d5d7b61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} caption={"iPolaroid"} />
                </View>

                {/* navigate to login */}
                <CustomButton callback={()=>{
                    navigation.navigate('Login');
                }} text={"Get Started"}/>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({ 
    horizontalDivider:{
        borderBottomColor: '7f7f7f',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        paddingTop: '15%',
    },

    horizontalDividerWithoutPadding:{
        borderBottomColor: '7f7f7f',
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        
    },

    description:{
        fontFamily: 'ChelseaMarket-Regular',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 30,
        color: '#906262'
    },

    card:{
        alignSelf: 'center',
        padding: 40,
    },

    button:{
        width: '80%',
        backgroundColor: '#e7cece',
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth:2,
        shadowColor: '#000', 
        shadowOffset: {
            width: 3, 
            height: 3, 
        },
        shadowOpacity: 1, 
        shadowRadius: 2, 
        
    },

    buttonText:{
        fontFamily: 'ChelseaMarket-Regular',
        fontSize: 17,
    }
});