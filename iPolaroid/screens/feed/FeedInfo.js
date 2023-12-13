import React from "react";
import { View, Image, StyleSheet,  SafeAreaView,TouchableOpacity,Text,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Svg,Path } from "react-native-svg";
import FeedInfoPreview from "../../components/FeedInfoPreview";

const FeedInfo = ({route}) =>{
    const data = route.params.data;
    const { caption, date, description, image, key,type} = data;

    const navigation = useNavigation();

    const style = StyleSheet.create({
        backButton:{
            padding: 10,
        },

        preview:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 35,
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center',
            padding: 10,
        },

        horizontalDivider:{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            width: '60%',
            alignSelf: 'center',
            padding: 5,
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
        },

        buttonContainer:{
            paddingBottom:40
        }

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

            <Text style={style.preview}>Old Memories</Text>
            <View style={style.horizontalDivider}/>
            <ScrollView>
                <FeedInfoPreview caption={caption} date={date} description={description} image={image} type={type}/>
            </ScrollView>
        </SafeAreaView>
    );

}

export default FeedInfo;