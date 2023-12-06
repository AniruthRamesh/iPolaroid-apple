import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

const CustomButton = ({callback,text })=>{
    const style = StyleSheet.create({
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


    return(
        <TouchableOpacity onPress={callback} style={style.button}>
            <Text style={style.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;