import { PERMISSIONS,requestMultiple} from "react-native-permissions";
import { openSettings } from "react-native-permissions";
import { Alert } from "react-native";

const requestCameraPermission = async () => {
     requestMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.MICROPHONE]).then((statuses)=>{
            console.log(statuses)
            if(statuses[PERMISSIONS.IOS.CAMERA] == 'granted' && statuses[PERMISSIONS.IOS.MICROPHONE] == 'granted'){
                console.log("camera and microphone granted")
            }
            else{
                Alert.alert(
                    "Permission Required",
                    "Please allow camera and microphone permissions to use this feature.",
                    [
                      { text: "Cancel", style: "cancel" },
                      { text: "Open Settings", onPress: () => openSettings() }
                    ],
                    { cancelable: true }
                  );
                return;
            }
        });
};

const requestLibraryPermission = async () => {
   requestMultiple([PERMISSIONS.IOS.PHOTO_LIBRARY]).then((statuses)=>{
            console.log(statuses)
            if(statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] == 'granted'){
                console.log("LIBRARY access granted")
            }
            else{
                alert("Please allow Media access for this feature");
                return;
            }
        });
}

const requestVideoPermission = async () => {
    requestMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.MICROPHONE]).then((statuses)=>{
            console.log(statuses)
            if(statuses[PERMISSIONS.IOS.CAMERA] == 'granted' && statuses[PERMISSIONS.IOS.MICROPHONE] == 'granted'){
                console.log("camera and microphone granted")
            }
            else{
                Alert.alert(
                    "Permission Required",
                    "Please allow camera and microphone permissions to use this feature.",
                    [
                      { text: "Cancel", style: "cancel" },
                      { text: "Open Settings", onPress: () => openSettings() }
                    ],
                    { cancelable: true }
                  );
                return;
            }
        });
}

export {requestCameraPermission,requestLibraryPermission,requestVideoPermission};