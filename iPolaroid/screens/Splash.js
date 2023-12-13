import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchFeedData } from "../reducers/feedDataReducer";

const Splash = ({navigation}) =>{
  const dispatch = useDispatch();
  const {lastFetchedId} = useSelector(state => state.feedData);
  console.log("lastFetchedId",lastFetchedId);

    const checkAuthState = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user) {
            
            dispatch(fetchFeedData(lastFetchedId));
  
            navigation.navigate('Tab');
            
        } else {
            navigation.navigate('Onboarding');  
        }
      };

      useEffect(() => {
        checkAuthState();
      },[]);
}

export default Splash;