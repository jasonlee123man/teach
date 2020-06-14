// 引入基础组件
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

// 自定义组件
export default class Flex extends Component{

    render(){
        return(
            <View style={styles.box}>
                <View style={[styles.flex,styles.center]}>
                    <Text>酒店</Text>
                </View>
                <View style={[styles.flex,styles.leftRight]}>
                    <View style={[styles.flex,styles.center,styles.bottom]}><Text>海外酒店</Text></View>
                    <View style={[styles.flex,styles.center]}><Text>特价酒店</Text></View>
                </View>

                <View style={[styles.flex]}>
                    <View style={[styles.flex,styles.center,styles.bottom]}><Text>团购</Text></View>
                    <View style={[styles.flex,styles.center]}><Text>民宿 客栈</Text></View>
                </View>
            </View>
        )
    }
}



// 定义样式表
const styles = StyleSheet.create({
    box:{
        backgroundColor:'#ff0080',
        height:80,
        margin:3,
        borderRadius:2,
        flexDirection:"row"
    },
    flex:{
        flex:1
    },
    center:{
       justifyContent:"center",
        alignItems:"center"
    },
    leftRight:{
        borderColor:'white',
        borderRightWidth:1,
        borderLeftWidth:1
    },
    bottom:{
        borderBottomWidth:1,
        borderBottomColor:"white"
    }
})