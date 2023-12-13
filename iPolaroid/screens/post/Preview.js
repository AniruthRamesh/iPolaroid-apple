import React from "react";
import { View,StyleSheet,TouchableOpacity,Text,SafeAreaView } from "react-native";
import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

const Preview = ({route}) => {
    const {image,type} = route.params;
    const navigation = useNavigation();

    const goBack = () => {
        try {
            navigation.goBack();
        } catch (error) {
            console.error('Error going back:', error);
        }
    }
    
    const goNext = () => {
        try {
            navigation.navigate("PostData", { image: image, type: type });
        } catch (error) {
            console.error('Error navigating to PostData:', error);
        }
    }
    

    const style = StyleSheet.create({
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            flex:1
        },
        button:{
            width: '50%',
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
            paddingLeft: 10,
            
            
        },
    
        buttonText:{
            fontFamily: 'ChelseaMarket-Regular',
            fontSize: 17,
        },

        row:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 40,
        }
    });
    
    return(
        <SafeAreaView style={style.container}>
            <Card image={image} caption={""} type={type}/>

            <View style={style.row}>
                <TouchableOpacity onPress={goNext} style={style.button}>
                    <Text style={style.buttonText}>Continue</Text>
                </TouchableOpacity>

                <View style={{marginLeft:10, marginRight:10}}></View>
                
                <TouchableOpacity onPress={goBack} style={style.button}>
                    <Text style={style.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Preview;