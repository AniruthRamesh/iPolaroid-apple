import React from "react";
import { View,StyleSheet,TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";

const Logout = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem("user");
        navigation.navigate("Onboarding");
    };
    const image = require("../assets/images/exit.jpg");

    const style = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center',
        }
    });
    
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Card image={image} caption={"Click to Logout"} />
            </TouchableOpacity>
        </View>
    );
    
}

export default Logout;
