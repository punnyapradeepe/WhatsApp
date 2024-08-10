// App/Navigations/TabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './../Screens/ChatScreen';
import { CallImg, CameraImg, ChatImg, SettingsImg, StatusImg } from '../Utils/SvgIcons';
import CallScreen from './../Screens/CallScreen';
import CameraScreen from '../../App/Screens/CameraScreen';
import StatusScreen from './../Screens/StatusSCreen'; 
import SettingsScreen from './../Screens/SettingsScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: styles.tabBarLabel,
      tabBarStyle: styles.tabBar,
    }}
  >
    <Tab.Screen
      name='Status'
      component={StatusScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <StatusImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
    <Tab.Screen
      name='Calls'
      component={CallScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <CallImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
    <Tab.Screen
      name='Camera'
      component={CameraScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <CameraImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
    <Tab.Screen
      name='Chats'
      component={ChatScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <ChatImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
    <Tab.Screen
      name='Settings'
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <SettingsImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    paddingHorizontal: 20,
    height: 70,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  tabBarLabel: {
    marginBottom: 10, }
    
});

export default TabNavigation;
