// App/Navigations/TabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './../Screens/ChatScreen';
import { CallImg, CameraImg, ChatImg, SettingsImg, StatusImg } from '../Utils/SvgIcons';
import CallScreen from './../Screens/CallScreen';
import CameraScreen from '../../App/Screens/CameraScreen';
import StatusScreen from './../Screens/StatusSCreen'; 
import SettingsScreen from './../Screens/SettingsScreen';
import { StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';
import EditProfile from '../Screens/EditProfile';
import AccountScreeen from '../Screens/AccountScreeen';
import SettingChat from '../Screens/SettingChat';
import NotificationSettingsScreen from '../Screens/NotificationSettingsScreen';
import DataAndStorageUsageScreen from '../Screens/DataAndStorageUsageScreen';
import CallEdit from '../Screens/CallEdit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => (
  <Tab.Navigator
  initialRouteName="Chats"
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
      component={CallScreenStack}
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
      component={SettingsScreenStack}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <SettingsImg width={size} height={size} fill={focused ? 'blue' : 'black'} />
        ),
      }}
    />
  </Tab.Navigator>
);
const SettingsScreenStack = () => (
  <Stack.Navigator initialRouteName="Calls">
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
    <Stack.Screen name="account" component={AccountScreeen} options={{ headerShown: false }} />
    <Stack.Screen name="whats" component={SettingChat} options={{ headerShown: false }} />
    <Stack.Screen name="notification" component={NotificationSettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="data" component={DataAndStorageUsageScreen} options={{ headerShown: false }} />

  </Stack.Navigator>
);
const CallScreenStack = () => (
  <Stack.Navigator initialRouteName="Calls">
    <Stack.Screen name="Calls" component={CallScreen} options={{ headerShown: false }} />
    <Stack.Screen name="calledit" component={CallEdit} options={{ headerShown: false }} />
 
  </Stack.Navigator>
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
    borderColor:Colors.Gray,
  },
  tabBarLabel: {
    marginBottom: 10, }
    
});

export default TabNavigation;
