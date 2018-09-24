import React,{Component} from 'react';
import TabTest from './TabTest';
import Mine from './Mine';
import {createStackNavigator} from 'react-navigation';
import MyReward from "./MyReward";

const Stack = createStackNavigator({
   TabTest:{
       screen:TabTest,
       navigationOptions:{
           header:null
       },
   },
   Mine:{
       screen:Mine,
       navigationOptions:{
           headerTitle:'关于我们',
           headerTitleStyle:{alignSelf:'center'},
           gesturesEnabled:true
       }
   },
   MyReward:{
       screen:MyReward,
       navigationOptions:{
           headerTitle:'我的奖励',
           gesturesEnabled:true,
           headerTitleStyle:{alignItems:'center'}
       }
   }

});
export default Stack;