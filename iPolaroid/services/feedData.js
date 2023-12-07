import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import saveDataToAsyncStorage from './cacheData';

async function getFeedData() {
    const uid = await AsyncStorage.getItem('uid');
    console.log(uid);
    if(uid==null){
        return;
    }

    const postsRef = firestore().collection('users').doc(uid).collection('post');
    const querySnapshot = await postsRef.get();
    const data =  querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    await saveDataToAsyncStorage(data);
}

export default getFeedData;