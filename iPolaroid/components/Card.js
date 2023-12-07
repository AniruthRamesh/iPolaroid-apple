import { View,StyleSheet,Image,Text } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import Video from 'react-native-video'; 


const Card = ({image,caption}) => {
    const style = StyleSheet.create({
        card:{
            width: 350,
            height: 385,
            backgroundColor: '#e9e9e9',
            alignSelf: 'center',
        },
        image:{
            flex: 1, // Add flex to fill the container
            width: '100%', // Use 100% of the container's width
            height: '100%', // Use 100% of the container's height
            alignSelf: 'center',
        },

        container:{
            width: 320,
            height: 320,
            alignSelf: 'center',
            marginTop: 20,
        },

        caption:{
            fontFamily: 'PermanentMarker-Regular',
            fontSize: 25,
            textAlign: 'center',
            padding:5
        },
        videoLabel: {
            position: 'absolute',
            top: 0, 
            right: 0, 
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
            color: 'white',
            padding: 5,
            borderRadius: 5,
            fontSize: 13,
            fontWeight: 'bold',
            fontFamily: 'ChelseaMarket-Regular',
            textShadowColor: 'rgba(0, 0, 0, 0.8)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 3,
        },
    });

    // Function to determine if the image source is local or a network URI
    const getImageSource = (img) => {
        // Check if img is a local image (require)
        if (typeof img === 'number') {
            return img;
        }
        // Assume img is a network URI
        return { uri: img };
    };

    function isLocalImage(img){
        return typeof img === 'number';
    }

    const islocal = isLocalImage(image);

    // Function to check for common video file extensions
    function isVideoFile(filePath) {
        const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv','MOV']; // Add more as needed
        return filePath && typeof filePath === 'string' && videoExtensions.some(ext => filePath.includes(ext));
    }

    // Check if the media type is a video
    const isVideo = isVideoFile(image);

    return (
        <View style={style.card}>
            <View style={style.container}>
            {
                isVideo ? (
                    <>
                        <Video
                        source={{ uri: image }}
                        style={style.image}
                        controls
                        resizeMode="cover"
                        paused={true}
                        />
                        <Text style={style.videoLabel}>Video</Text>
                    </>
                ) : islocal ? (
                    <Image
                        source={image}
                        style={style.image}
                        resizeMode="cover"
                    />
                ) : (
                    <FastImage
                        source={{ uri: image }}
                        style={style.image} 
                        resizeMode={FastImage.resizeMode.cover}
                    />
                )
            }


            </View>
            <Text style={style.caption}>{caption}</Text>
        </View>
    );
}

export default Card;