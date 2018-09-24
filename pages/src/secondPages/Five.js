import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class Five extends Component<Props> {
    static navigationOptions = {
        title: "低利率"
    };
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
