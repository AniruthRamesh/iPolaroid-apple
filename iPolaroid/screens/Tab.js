import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import PostHome from "./PostHome";
import { Svg,Path } from "react-native-svg";
import Logout from "./Logout";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Tab = ({navigation,route})=>{
    const Tabs = createBottomTabNavigator();  

    const FeedIcon = ({color,size}) => {
        return (
            <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
                <Path fill="none" d="M0 0h24v24H0z" />
                <Path d="M12 5.52L6 10.1V19h12v-8.9l-6-4.58zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3" />
                <Path d="M12 3L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16H6v-8.9l6-4.58 6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" />
            </Svg>
        );
    }
    
    const LogoutIcon = ({color,size}) => (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
    </Svg>
    );

    const PostIcon = ({color,size}) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z" />
        <Path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z" />
    </Svg>);

    return(
        <Tabs.Navigator screenOptions={({ route }) => ({
          
            headerShown: false,
            gestureEnabled: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Feed') {
                return <FeedIcon color={color} size={size} />;
              } else if (route.name === 'New Post') {
                return <PostIcon color={color} size={size} />;
              }
              else if (route.name === 'Logout') {
                return <LogoutIcon color={color} size={size} />;
              }
            },
            tabBarStyle:{
              display: getTabBarVisibility(route) ? 'flex' : 'none',

            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: 'ChelseaMarket-Regular', 
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',  
          })}
          >
            <Tabs.Screen name="Feed" component={Feed} />
            <Tabs.Screen name="New Post" component={PostHome} />
            <Tabs.Screen name="Logout" component={Logout} />
        
        </Tabs.Navigator>
    )

}

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if (routeName === 'FeedInfo') {
      return false;
    }
    return true;
  }

export default Tab;