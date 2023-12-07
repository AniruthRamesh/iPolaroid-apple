import React from "react";
import { View,StyleSheet ,Text,TouchableOpacity,SafeAreaView} from "react-native";
import BackButton from "../../components/BackButton";
import { Svg,Path } from "react-native-svg";

const CameraScreen = ({navigation}) => {
  //change the image and also how we send the data.
  const image = require("../../assets/images/onboarding.jpg");
  const style = StyleSheet.create({
        backButton:{
        padding: 10,
        },
    });
  return(
      <SafeAreaView style={{flex:1}}>
        <View style={style.backButton}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Svg height="25" width="25" viewBox="0 0 24 24">
                    <Path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" fill="#000" />
                </Svg>
            </TouchableOpacity>
        </View>

          <View>
              <Text>cameraScreen</Text>

              <TouchableOpacity onPress={() => navigation.navigate("Preview", {image:image}) }>
                  <Text>navvv</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
};

export default CameraScreen;


// import React, {useEffect, useState, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
//   Text,
//   Linking,
//   Image,
// } from 'react-native';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// const CameraScreen = ({navigation}) =>{
//   const camera = useRef(null);
// //   const devices = useCameraDevices();
//   const device = useCameraDevice('back');

//   const [showCamera, setShowCamera] = useState(false);
//   const [imageSource, setImageSource] = useState('');

//   useEffect(() => {
//     async function getPermission() {
//       const newCameraPermission = await Camera.requestCameraPermission();
//       console.log(newCameraPermission);
//     }
//     getPermission();
//   }, []);

//   const capturePhoto = async () => {
//     if (camera.current !== null) {
//       const photo = await camera.current.takePhoto({});
//       setImageSource(photo.path);
//       setShowCamera(false);
//       console.log(photo.path);
//     }
//   };

//   if (device == null) {
//     return <Text>Camera not available</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {showCamera ? (
//         <>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={showCamera}
//             photo={true}
//           />

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.camButton}
//               onPress={() => capturePhoto()}
//             />
//           </View>
//         </>
//       ) : (
//         <>
//           {imageSource !== '' ? (
//             <Image
//               style={styles.image}
//               source={{
//                 uri: `file://'${imageSource}`,
//               }}
//             />
//           ) : null}

//           <View style={styles.backButton}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: 'rgba(0,0,0,0.2)',
//                 padding: 10,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: 10,
//                 borderWidth: 2,
//                 borderColor: '#fff',
//                 width: 100,
//               }}
//               onPress={() => setShowCamera(true)}>
//               <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.buttonContainer}>
//             <View style={styles.buttons}>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: '#fff',
//                   padding: 10,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: 10,
//                   borderWidth: 2,
//                   borderColor: '#77c3ec',
//                 }}
//                 onPress={() => setShowCamera(true)}>
//                 <Text style={{color: '#77c3ec', fontWeight: '500'}}>
//                   Retake
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: '#77c3ec',
//                   padding: 10,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRadius: 10,
//                   borderWidth: 2,
//                   borderColor: 'white',
//                 }}
//                 onPress={() => setShowCamera(true)}>
//                 <Text style={{color: 'white', fontWeight: '500'}}>
//                   Use Photo
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'gray',
//   },
//   backButton: {
//     backgroundColor: 'rgba(0,0,0,0.0)',
//     position: 'absolute',
//     justifyContent: 'center',
//     width: '100%',
//     top: 0,
//     padding: 20,
//   },
//   buttonContainer: {
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     bottom: 0,
//     padding: 20,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   camButton: {
//     height: 80,
//     width: 80,
//     borderRadius: 40,
//     //ADD backgroundColor COLOR GREY
//     backgroundColor: '#B2BEB5',

//     alignSelf: 'center',
//     borderWidth: 4,
//     borderColor: 'white',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     aspectRatio: 9 / 16,
//   },
// });

// export default CameraScreen;