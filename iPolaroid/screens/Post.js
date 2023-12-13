import React from "react";
import { useState } from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView,ActivityIndicator,Modal } from "react-native";
import { Svg,Path } from "react-native-svg";
import { requestLibraryPermission,requestCameraPermission,requestVideoPermission } from "../services/requestPermissions";
import { PERMISSIONS,check,checkMultiple } from "react-native-permissions";
import { launchCamera,launchImageLibrary } from "react-native-image-picker";

const Post = ({navigation, route}) =>{
    const [loading, setLoading] = useState(false);

    function isVideoFile(filePath) {
        const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv','MOV']; // Add more as needed
        return filePath && typeof filePath === 'string' && videoExtensions.some(ext => filePath.includes(ext));
    }
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center',
          },
        heading:{
            fontFamily: 'ChelseaMarket-Regular',
            color: '#906262',
            fontSize: 35,
            alignSelf: 'center',
            textAlign: 'center',
        },
        horizontalDivider:{
            borderBottomColor: '7f7f7f',
            borderBottomWidth: 1,
            width: 200,
            alignSelf: 'center',
            padding: 10,
        },

        icons:{
            flexDirection: 'row',
            padding: 20,
        },

        iconPadding:{
            paddingLeft:20,
            paddingRight:20,
        }
    });

    const handleVideo = async ()=>{
        
        checkMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.MICROPHONE]).then((statuses)=>{
            if(statuses[PERMISSIONS.IOS.CAMERA] == 'granted' && statuses[PERMISSIONS.IOS.MICROPHONE] == 'granted'){
                console.log("camera and microphone alreadyyy granted")
            }
            else{
                requestVideoPermission();
                return;
            }
        });

        const result = await launchCamera({mediaType:'video'},(response)=>{
            const data = response.assets;
            if(data==undefined || data==null){
                return;
            }
            const uri = data[0].uri;
            navigation.navigate("PostData", { image: uri, type: "video"});
        });
    }

    const handleCamera = async ()=>{
        
        checkMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.MICROPHONE]).then((statuses)=>{
            if(statuses[PERMISSIONS.IOS.CAMERA] == 'granted' && statuses[PERMISSIONS.IOS.MICROPHONE] == 'granted'){
                console.log("camera and microphone already granted")
            }
            else{
                requestCameraPermission();
                return;
            }
        });

        const result = await launchCamera({mediaType:'photo'},(response)=>{
            const data = response.assets;
            if(data==undefined || data==null){
                return;
            }
            const uri = data[0].uri;
            navigation.navigate('Preview',{image:uri,type:'photo'});
            
        });
    }

    const handleImageLibrary = async ()=>{
        check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((status)=>{
            if(status[PERMISSIONS.IOS.PHOTO_LIBRARY] == 'granted'){
                console.log("library already granted")
            }
            else{
                requestLibraryPermission();
                return;
            }
        });
        
        
        const result = await launchImageLibrary({mediaType:'photo'},(response)=>{
            const data = response.assets;
            if(data==undefined || data==null){
                return;
            }
            const uri = data[0].uri;
            navigation.navigate('Preview',{image:uri,type:'photo'});
            
        });
    }

    const handleVideoLibrary = async ()=>{
        check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((status)=>{
            if(status[PERMISSIONS.IOS.PHOTO_LIBRARY] == 'granted'){
                console.log("library already granted")
            }
            else{
                requestLibraryPermission();
                return;
            }
        });
        
        const result = await launchImageLibrary({mediaType:'video', videoQuality:['high','medium']},(response)=>{
            const data = response.assets;
            if(data==undefined || data==null){
                return;
            }
            const uri = data[0].uri;
            navigation.navigate("PostData", { image: uri, type: "video"});
            
        });
    }

    return(
        <SafeAreaView style={style.container}>
            <Modal
                transparent={true}
                animationType="none"
                visible={loading}
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <ActivityIndicator size="large" />
                </View>
            </Modal>
            <View style={style.container}>
                <Text style={style.heading}>Create a new
                    {'\n'} memory</Text>
                <View style={style.horizontalDivider}/>
                <View style={style.icons}>
                    {/*open camera and take photo */}
                    <TouchableOpacity onPress={handleCamera} style={style.iconPadding}>
                        <Svg width={50} height={50} viewBox="0 0 24 24" fill="rgb(3,3,3)">
                            <Path fill="none" d="M0 0h24v24H0z" />
                            <Path d="M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 1 0 0-6.4z" />
                            <Path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                        </Svg>
                    </TouchableOpacity>

                    {/*use image picker and select from gallery, only photos */}
                    <TouchableOpacity onPress={handleImageLibrary} style={style.iconPadding}>
                        <Svg width={50} height={50} viewBox="0 0 24 24" fill="rgb(3,3,3)">
                            <Path fill="none" d="M0 0h24v24H0z" />
                            <Path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                        </Svg>
                    </TouchableOpacity>

                    
                </View>
                <View style={style.icons}>
                    {/*open camera and take video */}
                    <TouchableOpacity onPress={handleVideo} style={style.iconPadding}>
                        <Svg width={50} height={50} viewBox="0 0 24 24" fill="rgb(3,3,3)">
                            <Path fill="none" d="M0 0h24v24H0z" />
                            <Path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </Svg>
                    </TouchableOpacity>

                    {/*use image picker and select from gallery, only videos */}
                    <TouchableOpacity onPress={handleVideoLibrary} style={style.iconPadding}>
                        <Svg width={50} height={50} viewBox="0 0 24 24" fill="black">
                            <Path d="M0 0h24v24H0z" fill="none" />
                            <Path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default Post;