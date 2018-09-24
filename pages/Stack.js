import React,{Component} from 'react';
import {
    View,
}from 'react-native';
import TabTest from './TabTest';
import Mine from './Mine';
import {createStackNavigator} from 'react-navigation';

const Stack = createStackNavigator({
   TabTest:{
       screen:TabTest,
       navigationOptions:{
           header:null
       }
   },
    Mine:{
       screen:Mine,
        navigationOptions:{
           headerTitle:'关于我们'
        }
    }

});
export default Stack;