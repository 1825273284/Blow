import React,{Component} from 'react';
import {
    Text,
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
   }
});
export default Stack;