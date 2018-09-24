import React,{Component} from 'react';
import {View,}from 'react-native';
import TabTest from './TabTest';
import {createStackNavigator} from 'react-navigation';
import SecondStack from "./src/secondPages/SecondStack";

const Stack = createStackNavigator({
   TabTest:{
       screen:TabTest,
       navigationOptions:{
           header:null
       }
   },
    SecondPage1:{
       screen: SecondStack
    }
});
export default Stack;