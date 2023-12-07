import React from "react";
import { View,StyleSheet,Image,Text,SafeAreaView } from "react-native";
import Card from "./Card";

const FeedInfoPreview = ({caption,description,date,image}) => {

    const style = StyleSheet.create({
        date:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 25,
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 20,
        },
        description:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 20,
            color: '#906262',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 20,
        }
     });
    return (
        <View>
            <Text style={style.date}>
                {date}
            </Text>
            <Card image={image} caption={caption}/>
            <Text style={style.description}>
                {description}
            </Text>
        </View>
    );
};

export default FeedInfoPreview;