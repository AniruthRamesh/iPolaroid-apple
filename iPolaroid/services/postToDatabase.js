import React from "react";
import { firebase } from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";


const postToDatabase = async (image, caption,description,date,type) => {
    const uid = await AsyncStorage.getItem('uid');
    const formattedDate = moment(date, "MMM D, YYYY").toDate();
    if (!uid) {
        console.error('User ID not found');
        return;
    }

    try{
        //users (collection) > uid(document) > post(collection) > document (auto generated id) > fields
        const userPostsRef = firebase.firestore().collection('users').doc(uid);

        const userDoc = await userPostsRef.get();
        if (!userDoc.exists) {
            await userPostsRef.set({ createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        }

        const userPostsDoc = userPostsRef.collection('post');

        const newPost = {
            image: image,
            caption: caption,
            description: description,
            date: date,
            type: type,
            formattedDate: formattedDate,
            };
        
        const docRef = await userPostsDoc.add(newPost);
        return docRef.id;
    } catch(e){
        console.error(e);
    }

};

export default postToDatabase;