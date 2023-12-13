import React from "react";
import { View,StyleSheet,Text,SafeAreaView , TouchableOpacity,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FeedInfoPreview from "../../components/FeedInfoPreview";
import { Svg,Path } from "react-native-svg";
import uploadData from "../../services/uploadData";
import postToDatabase from "../../services/postToDatabase";
import { ActivityIndicator, Modal } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";

const PostPreview = ({route}) => {
    const {image,caption,description,date,type} = route.params;
    const navigation = useNavigation();

    const post = async () => {
        const url = await uploadData(image,caption);

        if(url == undefined || url == "" || url == null){
            alert("Error in uploading, please try again.");
            setIsLoading(false);
            return;
        }

        const docid = await postToDatabase(url,caption,description,date,type);
        if(docid == undefined || docid == "" || docid == null){
            alert("Error in uploading, please try again.");
            setIsLoading(false);
            return;
        }
        
        setIsLoading(false);
        setPostSucess(true);
        Alert.alert(
            "Status",
            "Your post has been uploaded successfully",
            [
              { text: "OK", onPress: () => navigation.navigate('Post') }
            ],
            { cancelable: false }
        );
    }

    const [isLoading, setIsLoading] = useState(false);
    const [postSucess, setPostSucess] = useState(false);

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
            <Modal
                transparent={true}
                animationType="none"
                visible={isLoading}
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <ActivityIndicator size="large" />
                </View>
            </Modal>
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
                <FeedInfoPreview caption={caption} date={date} description={description} image={image}/>

                <View style={style.buttonContainer}>
                    <TouchableOpacity onPress={
                        ()=>{
                            setIsLoading(true);
                            
                            post(); 
                        }
                    } style={style.button}>
                        <Text style={style.buttonText}>post</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostPreview;