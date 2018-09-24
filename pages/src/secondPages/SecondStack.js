import React, {Component} from 'react';
import {View,Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import {pHeight,pWidth,pSize} from '../../user/util'
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

const SecondTabStack = createBottomTabNavigator({
    One: {
        screen: One,
        navigationOptions:{
            title: "新口子",
            tabBarIcon: ({tintColor, focused}) =>(
                <Image
                    source={ focused ? require('../img/ativeXinkouzi.png'): require('../img/xinkouzi.png') }
                    style={{height:pHeight(30),width:pWidth(30)}}
                />
            )
        },
    },
    Two: {
        screen: Two,
    },
    Three: {
        screen: Three,
    },
    Four: {
        screen: Four
    },
    Five: {
        screen: Five
    }
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
    }
});


export default class SecondStack extends Component {
    render() {
        return (
            <SecondTabStack/>
        );
    }
}

