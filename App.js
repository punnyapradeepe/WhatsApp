import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './App/Screens/LoginScreen';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditStatusScreen from './App/Screens/EditStatusScreen';
import ChatDetailScreen from './App/Screens/ChatDetailScreen';
import ContactInfoScreen from './App/Screens/ContactInfoScreen';
import EditContact from './App/Screens/EditContact';
import EditProfile from './App/Screens/EditProfile';
import StarredMsgScreen from './App/Screens/StarredMsgScreen';
import AccountScreeen from './App/Screens/AccountScreeen';
import CallEditComp from './Components/CallEditComp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chats" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="editStaus" component={EditStatusScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="contactInfo" component={ContactInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="editContact" component={EditContact} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="stared" component={StarredMsgScreen} options={{ headerShown: false }} />
        <Stack.Screen name="account" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="whats" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="notification" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="data" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="calleditcomp" component={CallEditComp} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={TabNavigation} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
