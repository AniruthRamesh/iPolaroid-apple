import React from "react";
import { firebase } from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


const postToDatabase = async (image, caption,description,date) => {
    const uid = await AsyncStorage.getItem('uid');
    if (!uid) {
        console.error('User ID not found');
        return;
    }

    try{
        //users (collection) > uid(document) > post(collection) > document (auto generated id) > fields
        const userPostsRef = firebase.firestore().collection('users').doc(uid).collection('post');

        const newPost = {
            image: image,
            caption: caption,
            description: description,
            date: date,
            };
        
        const docRef = await userPostsRef.add(newPost);
        return docRef.id;
    } catch(e){
        console.error(e);
    }

};

export default postToDatabase;