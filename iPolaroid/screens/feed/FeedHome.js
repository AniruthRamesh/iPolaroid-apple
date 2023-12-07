import React, { useEffect,useState } from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView,FlatList } from "react-native";
import Card from "../../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FeedInfo from "./FeedInfo";

const FeedHome = ({navigation}) =>{
    // this below is a sample mimicing how data is going to flow.
    const images = require("../../assets/images/exit.jpg");
    const [data,setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const feedData = await AsyncStorage.getItem('data');
            // console.log(feedData);
            if (feedData) {
                const newData = JSON.parse(feedData);
                setData(newData);
            }
        }

        getData();
    }, []);

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
            paddingTop:10,
        },
        image:{
            padding: 20,
        },

        safeArea: {
            flex: 1,
            paddingBottom: 30, // Adjust this value as needed
        },
    });

    const keyedData = data.map((item, index) => ({ ...item, key: String(index) }));

    const renderItem = ({ item,index}) => {
        const lastItem = index === data.length - 1;
        
        return(
            <TouchableOpacity onPress={() => {navigation.navigate("FeedInfo",{data:item})}} style={style.image}
                activeOpacity={0.6}
            >
                <Card image={item.image} caption={item.caption} />
                {!lastItem && <View style={style.horizontalDivider} />}
                {lastItem && <View style={{ marginBottom: 40 }} />}
            </TouchableOpacity>
        );
    }

    return(
        // we need to use flatlist to lazy load the data.
        <SafeAreaView style={style.safeArea}>
            <View>
                <Text style={style.header}>Nostalgia</Text>
                <View style={style.horizontalDivider}/>
                
                 <FlatList
                    data={keyedData}
                    renderItem={({ item, index }) => renderItem({ item, index })}
                    keyExtractor={item => item.key}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        </SafeAreaView>
    );

};

export default FeedHome;