import React from "react";
import { View,StyleSheet,TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";
import { useDispatch,useSelector } from "react-redux";
import authReducer from "../reducers/authReducer";
import { logout } from "../reducers/authReducer";

const Logout = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem("user");
        // dispatch(logout());
        navigation.navigate("Onboarding");
    };

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
                <Card image={"https://images.unsplash.com/photo-1598885408331-7d189bcb9717?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} caption={"Click to Logout"} />
            </TouchableOpacity>
        </View>
    );
    
}

export default Logout;
