import React from "react";
import { View,  StyleSheet, Text,  TouchableOpacity, SafeAreaView,ActivityIndicator,Modal } from "react-native";
import { Svg,Path } from "react-native-svg";
import { requestLibraryPermission,requestCameraPermission,requestVideoPermission } from "../services/requestPermissions";
import { PERMISSIONS,check,checkMultiple } from "react-native-permissions";
import { launchCamera,launchImageLibrary } from "react-native-image-picker";

const Post = ({navigation, route}) =>{
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
                //do nothing
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


    return(
        <SafeAreaView style={style.container}>
            
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
            </View>
            
        </SafeAreaView>
    );
};

export default Post;