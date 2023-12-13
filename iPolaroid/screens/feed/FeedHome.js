import React, { useEffect,useState } from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView,FlatList,RefreshControl,Modal, ActivityIndicator } 
from "react-native";
import Card from "../../components/Card";


import { useDispatch,useSelector } from "react-redux";
import { fetchFeedData } from "../../reducers/feedDataReducer";

//add loading indicator when the feed data is not yet dont fetching
const FeedHome = ({navigation}) =>{

    const dispatch = useDispatch();
    const { data, loading, error,lastFetchedId } = useSelector(state => state.feedData); // Accessing data from Redux state
    // const user = useSelector(state => state.authReducer.user);
    // console.log("data",data[0].id);
    // console.log("date",data[0].date);


    const [refreshing, setRefreshing] = React.useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        dispatch(fetchFeedData(lastFetchedId)); // Dispatch the thunk on refresh
        setRefreshing(false);
    };

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

        defaultview:{
            flex: 1,
            
            justifyContent: 'center',
            alignItems: 'center',
            padding: 110,
        }
    });

    const keyedData = data.map((item, index) => ({ ...item, key: String(index) }));

    const renderItem = ({ item,index}) => {
        const lastItem = index === data.length - 1;
        
        return(
            <TouchableOpacity onPress={() => {navigation.navigate("FeedInfo",{data:item})}} style={style.image}
                activeOpacity={0.6}
            >
                <Card image={item.image} caption={item.caption} type={item.type} />
                {!lastItem && <View style={style.horizontalDivider} />}
                {lastItem && <View style={{ marginBottom: 120 }} />}
            </TouchableOpacity>
        );
    }

    const renderEmpty = () => {
        return (
            <View style={style.defaultview}>
                <TouchableOpacity onPress={()=>{navigation.navigate("New Post")}}>
                    <Card image={"https://images.unsplash.com/photo-1512168203104-3910bc2bcd54?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} caption={"click here to add post"} />
                </TouchableOpacity>
            </View>
        );
    }

    return(
        // we need to use flatlist to lazy load the data.
        <SafeAreaView style={style.safeArea}>
            <Modal
                transparent={true}
                animationType="none"
                visible={loading}
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <ActivityIndicator size="large" />
                </View>
            </Modal>
            <View>
                <Text style={style.header}>Nostalgia</Text>
                <View style={style.horizontalDivider}/>
                
                 {/* {data.length > 0 ? 
                    (<FlatList
                    data={keyedData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    onEndReached={()=> {dispatch(fetchFeedData())}}
                    onEndReachedThreshold={0.7}
                    refreshControl = {
                        (<RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />)
                    }/>
                    )   
                    :
                    (
                        <View style={style.defaultview}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("New Post")}}>
                                <Card image={"https://images.unsplash.com/photo-1512168203104-3910bc2bcd54?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} caption={"click here to add post"} />
                            </TouchableOpacity>
                        </View>
                    )
                    } */}

                    <FlatList
                        data={keyedData}
                        ListEmptyComponent={renderEmpty}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key}
                        showsVerticalScrollIndicator={false}
                        onEndReached={()=> {dispatch(fetchFeedData())}}
                        onEndReachedThreshold={0.7}
                        refreshControl = {
                            (<RefreshControl
                                refreshing={refreshing}
                                onRefresh={handleRefresh}
                            />)
                    }/>         
            </View>
        </SafeAreaView>
    );

};

export default FeedHome;