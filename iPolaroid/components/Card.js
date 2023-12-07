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
        }
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
        const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv']; // Add more as needed
        return filePath && typeof filePath === 'string' && videoExtensions.some(ext => filePath.includes(ext));
    }

    // Check if the media type is a video
    const isVideo = isVideoFile(image);

    return (
        <View style={style.card}>
            <View style={style.container}>
            {
                isVideo ? (
                    <Video
                        source={{ uri: image }}
                        style={style.image}
                        controls
                        resizeMode="cover"
                        paused={true}
                    />
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