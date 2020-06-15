import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import HomeScreen from '../screens/HomeScreen';
//import QuestionScreen from '../screens/QuestionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
 Schedule : {
    screen : ScheduleScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "Schedule"
    }
  },
  /*
  Question : {
    screen : QuestionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="question" type ="font-awesome" />,
      drawerLabel : "Questions"
    }
  },
  */
  Setting : {
    screen : SettingsScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},


  {
    initialRouteName : 'Home'
  })