import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './App/Screens/LoginScreen';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatEditScreen from './App/Screens/ChatEditScreen';
import EditStatusScreen from './App/Screens/EditStatusScreen';
import ChatDetailScreen from './App/Screens/ChatDetailScreen';
import ContactInfoScreen from './App/Screens/ContactInfoScreen';
import EditContact from './App/Screens/EditContact';
import EditProfile from './App/Screens/EditProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chats" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="chatedit" component={ChatEditScreen} options={{ headerShown: false }} />
        <Stack.Screen name="editStaus" component={EditStatusScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="contactInfo" component={ContactInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="editContact" component={EditContact} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={TabNavigation} options={{ headerShown: false }} />


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
