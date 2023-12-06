import React from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView } from "react-native";

const Feed = ({navigation}) =>{
    const style = StyleSheet.create({
        header:{
            fontFamily: 'ChelseaMarket-Regular',
            alignSelf: 'center',
            fontSize: 35,
            color: '#906262',
            padding: 10,
        },
        horizontalDivider:{
            borderBottomColor: '7f7f7f',
            borderBottomWidth: 1,
            width: '80%',
            alignSelf: 'center',
            padding: 10,
        },
    });

    return(
        <SafeAreaView>
            <View>
                <Text style={style.header}>Nostalgia</Text>
                <View style={style.horizontalDivider}/>

            </View>
        </SafeAreaView>
    );

};

export default Feed;