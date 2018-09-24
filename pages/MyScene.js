/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import {pWidth,pHeight,pSize} from "./user/util";
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

export default class Attempt extends Component {
    render() {
        return (
            <View style={styles.container}>
               <StatusBar                             //设置状态栏背景颜色
                    backgroundColor={'#ffdc26'}
               />

                    <View style={styles.first}>
                        <View style={styles.one}>
                            <Text style={styles.textStyle}>我的</Text>
                        </View>
                    </View>


                    <View style={styles.two}>
                        <View style={styles.left}>
                            <View style={styles.img}>
                                <Image
                                    style={styles.imageStyle3}
                                    source={require('./img/money.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.text2}>
                                极简借贷 轻松解决燃眉之急
                            </Text>
                            <View style={styles.textStyle2}>
                                <Text style={styles.text3}>登录/注册</Text>
                            </View>
                        </View>
                    </View>



                    <View style={styles.three}>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/message.png')}
                            />
                            <Text style={styles.text4}>我的邀请</Text>
                            <Image
                                style={styles.imageStyle}
                                source={require('./img/right.png')}
                            />
                        </View>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/paper.png')}
                            />
                            <Text style={styles.text4}>我的邀请码</Text>
                        </View>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/present.png')}
                            />
                            <Text style={styles.text4}>我的奖励</Text>
                            <Image
                                style={styles.imageStyle}
                                source={require('./img/right.png')}
                            />
                        </View>
                        <View style={styles.textStyle4}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/question.png')}
                            />
                            <Text style={styles.text4}>常见帮助</Text>
                            <Image
                                style={styles.imageStyle}
                                source={require('./img/right.png')}
                            />
                        </View>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/weChat.png')}
                            />
                            <Text style={styles.text4}>微信公众号</Text>
                            <Text style={styles.text5}>米米信</Text>
                            <Image
                                style={styles.imageStyle2}
                                source={require('./img/right.png')}
                            />
                        </View>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/up.png')}
                            />
                            <Text style={styles.text4}>版本更新</Text>
                            <Text style={styles.text5}>已是最新版本</Text>
                        </View>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/comment.png')}
                            />
                            <Text style={styles.text4}>给我留言</Text>
                            <Image
                                style={styles.imageStyle}
                                source={require('./img/right.png')}
                            />
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mine')}>
                        <View style={styles.textStyle3}>
                            <Image
                                style={styles.imageStyle4}
                                source={require('./img/tan.png')}
                            />
                            <Text style={styles.text4}>关于我们</Text>
                            <Image
                                style={styles.imageStyle}
                                source={require('./img/right.png')}
                            />
                        </View>
                        </TouchableOpacity>
                    </View>

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
    },
    first:{
        backgroundColor: '#F5FCFF',
        height:height*0.4,
        width:width,
        position:'absolute',
        top:0,
    },
    one:{
        alignItems: 'center',
        width:width,
        height:height*0.17 ,
        backgroundColor:'#ffdc26',
        marginTop:0,
    },
    textStyle:{
        fontSize:pSize(25),
        marginTop: 10,
    },
    two:{
        width:width*0.95,
        height:height*0.2,
        backgroundColor:'#F5FCFF',
        borderColor:'#949494',
        borderBottomWidth:0.5,
        borderWidth:0.5,
        borderRadius:0.5,
        elevation: 2.5,  //产生立体效果
        flexDirection: 'row',
        position: 'absolute',
        bottom:height*0.61,
    },
    img:{
        width:height*0.12,
        height:height*0.12,
        borderRadius:height*0.06,  //设置圆边框，值为半径
        backgroundColor:'#ffdc26',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    left:{
        justifyContent: 'center',
        width:width*0.25,
        backgroundColor:'#F5FCFF',
    },
    right:{
        backgroundColor:'#F5FCFF',
        width:width*0.75,

    },
    text2:{
        fontSize: pSize(17),
        color:'gray',
        marginTop:20,
        marginLeft: 20,

    },
    textStyle2:{
        backgroundColor: '#ffdc26',
        height:height*0.06,
        justifyContent: 'center',
        alignItems: 'center',
        width:width*0.45,
        borderRadius:width*25,
        marginLeft:pWidth(40),
        marginTop:pHeight(20),
    },
    text3:{
        textAlign: 'center',
        color:'black',
        fontSize:pSize(17),
    },
    three:{
        backgroundColor:'#d7d7d7',
        width:width,
        height:height*0.65,
        marginTop:height*0.4,
    },
    textStyle3:{
        height:pHeight(40),
        width:width,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#F5FCFF',
        marginBottom: 1,
    },
    textStyle4:{
        height:pHeight(40),
        width:width,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#F5FCFF',
        marginBottom:10,
    },
    text4:{
        fontSize:pSize(17),
        color:'gray',
        paddingLeft: 8,
    },
    text5:{
        fontSize:pSize(17),
        color:'gray',
        marginLeft: width*0.4,
    },
    imageStyle:{
        height:pHeight(25),
        width:pWidth(12),
        marginLeft:width*0.64,
    },
    imageStyle2:{
        height:pHeight(25),
        width:pWidth(12),
        marginLeft:24,
    },
    imageStyle3:{
        width:height*0.09,
        height:height*0.09,
    },
    imageStyle4:{
        height:pHeight(26),
        width:pWidth(30),
        marginLeft: 5,
    },

});


