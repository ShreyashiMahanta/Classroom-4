import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import  WelcomeScreen from './screens/WelcomeScreen';
//import  LoginScreen from './screens/LoginScreen';
//import  StudentSignUpScreen from './screens/StudentSignUpScreen';
//import  HomeScreen from './screens/HomeScreen';
import  WP from './screens/WP';
//import SettingsScreen from './screens/SettingsScreen';
//import QuestionScreen from './screens/QuestionScreen';
//import { NavigationContainer } from 'react-navigation';
//import { AppTabNavigator } from './components/AppTabNavigator';

export default function App() {
  return (
     <WP/>  
  );
}
/* 
var AppNavigator = createSwitchNavigator({ 
 // WelcomeScreen : WelcomeScreen,
 // LoginScreen : LoginScreen,
 // StudentSignUpScreen : StudentSignUpScreen,
  WP : WP,
//  HomeScreen : HomeScreen,
 // SettingsScreen : SettingsScreen,
//  AppTabNavigator : AppTabNavigator,
}

)
const AppContainer = createAppContainer(AppNavigator)
*/