import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';


export default class Main extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'One'
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'One'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi595x04xj301s01sq2q.jpg'}} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi595x04xj301s01sq2q.jpg'}} />}
                        onPress={() => this.setState({ selectedTab: 'One' })}>
                        <Text>this is one</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Two'}
                        title="订单"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5bn0arcj301c01c0n1.jpg'}} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5bn0arcj301c01c0n1.jpg'}} />}
                        onPress={() => this.setState({ selectedTab: 'Two' })}>
                        <Text>this is two</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Three'}
                        title="产品"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5dsykmmj301c01ca9t.jpg'}} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={{uri:'http://ww1.sinaimg.cn/large/005T39qagy1fvi5dsykmmj301c01ca9t.jpg'}} />}
                        onPress={() => this.setState({ selectedTab: 'Three' })}>
                        <Text>this is three</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        height: 50,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    tabText: {
        marginTop: 1,
        color: 'gray',
        fontSize: 10
    },
    selectedTabText: {
        marginTop: 1,
        color: 'black',
        fontSize: 10
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 5
    }
});
