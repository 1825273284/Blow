import React,{Component} from 'react';
import {
    View,
}from 'react-native';
import TabTest from './TabTest';
import {createStackNavigator} from 'react-navigation';

const Stack = createStackNavigator({
   TabTest:{
       screen:TabTest,
       navigationOptions:{
           header:null
       }
   },
   ScrollTabTest:{
       screen:ScrollTabTest
   }

});
export default Stack;