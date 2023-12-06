import { View,StyleSheet,Image,Text } from "react-native";
import React from "react";

const Card = ({image,caption}) => {
    const style = StyleSheet.create({
        card:{
            width: 340,
            height: 375,
            backgroundColor: '#e9e9e9',
            alignSelf: 'center',
        },
        image:{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginTop: 20,
        },

        caption:{
            fontFamily: 'PermanentMarker-Regular',
            fontSize: 25,
            textAlign: 'center',
            padding:5
        }
    });

    //limit the caption to only 20 characters.

    return(
        <View style={style.card}>
            <Image style={style.image} source={image} />
            <Text style={style.caption}>{caption}</Text>
        </View>
    );
}

export default Card;