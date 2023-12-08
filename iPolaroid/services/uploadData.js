import { firebase } from "@react-native-firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const uploadData = async (image, caption) => {
    const uid = await AsyncStorage.getItem('uid');
    if (!uid) {
        console.error('User ID not found');
        return;
    }

    try {
        // Generate a unique filename using caption and a timestamp
        const uniqueFilename = `${caption}-${Date.now()}`;

        // Reference to the file in the UID folder (or root, if you prefer)
        const reference = firebase.storage().ref(`${uid}/${uniqueFilename}`);

        // Upload the file
        await reference.putFile(image);

        // Retrieve and log the download URL
        const url = await reference.getDownloadURL();
        console.log('File uploaded and download URL is:', url);

        return url;
    } catch (e) {
        console.error(e);
    }

    
};

export default uploadData;
