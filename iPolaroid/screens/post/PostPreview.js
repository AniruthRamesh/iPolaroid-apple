import React from "react";
import { View,StyleSheet,Image,Text,SafeAreaView , TouchableOpacity,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card";
import FeedInfo from "../../components/FeedInfo";
import { Svg,Path } from "react-native-svg";
import CustomButton from "../../components/CustomButton";


const PostPreview = ({route}) => {
    const {image,caption,description,date} = route.params;
    const navigation = useNavigation();

    const post = () => {
        console.log("Post");
    }

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

            <Text style={style.preview}>Preview</Text>
            <View style={style.horizontalDivider}/>
            <ScrollView>
                <FeedInfo caption={caption} date={date} description={description} image={image}/>

                <View style={style.buttonContainer}>
                    <TouchableOpacity onPress={post} style={style.button}>
                        <Text style={style.buttonText}>post</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostPreview;