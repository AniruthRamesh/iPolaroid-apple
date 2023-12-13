// src/store/feedSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

//this should be separated into different files -> services, thunks
export const fetchFeedData = createAsyncThunk(
    'feed/fetchData', 
    async (lastFetchedIdFromState, { getState }) => {
      try {
        const uid = await AsyncStorage.getItem('user');
        const user = JSON.parse(uid);
        if (!user) return { data: [], lastFetchedId: null };

        const lastFetchedId = lastFetchedIdFromState || getState().feedData.lastFetchedId;
    
        let query = firestore().collection('users').doc(user).collection('post').orderBy('formattedDate', 'desc');

        
        const querySnapshot = await query.get();
        // const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const data =  querySnapshot.docs.map(doc => {
            const docData = doc.data();
            return {
                id: doc.id,
                ...docData,
                // Convert formattedDate to a string
                formattedDate: docData.formattedDate.toDate().toISOString()
            }
        });


        const newLastFetchedId = data.length > 0 ? data[data.length - 1].id : lastFetchedId;

        return { data, lastFetchedId: newLastFetchedId };

      } catch (error) {
        console.log(error);
      }
    }
);


const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        data: [],
        lastFetchedId: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFeedData.fulfilled, (state, action) => {
                const newData = action.payload.data.filter(newItem => !state.data.some(existingItem => existingItem.id === newItem.id));
                console.log("newData",newData);
                state.data = [...state.data, ...newData];
                state.lastFetchedId = action.payload.lastFetchedId;
                state.loading = false;
            })
            .addCase(fetchFeedData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default feedSlice.reducer;
