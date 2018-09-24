import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import {pHeight,pWidth,pSize} from "../user/util";

export default class Item extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../src/img/temp1.png')}
                    style={{height:pHeight(45),width:pWidth(45),marginLeft: 10}}
                />
                <View style={styles.textContainer}>
                    <Text style={{color:"black",fontSize:20}}>
                        CM-妥妥花
                    </Text>
                    <Text style={{color:"#95999d",fontSize:15,marginTop: 5}}>
                        周期长零审核
                    </Text>
                </View>
                <Image
                    source={require('../src/img/come.png')}
                    style={{height:pHeight(20),width:pWidth(20),tintColor: "#95999d"}}
                />
            </View>
        );
    }
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        width: width,
        height: width/6.1,
        marginTop:100,
        flexDirection: "row",
        backgroundColor:"white",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textContainer:{
        width: pWidth(310),
        height:width/6.1,
        justifyContent: "center",
        marginLeft: 5
    }
});