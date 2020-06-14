// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

// 自定义组件并导出
export default class Demo extends Component{
    render(){
        return (
            <View style={styles.head}>
                <Text style={styles.text}>
                    <Text style={{color:"red"}}>中公</Text>
                    <Text style={{backgroundColor:'red',color:"white"}}>优就业</Text>
                    <Text>IT培训</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head:{
        height:55,
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:'red',
        borderBottomWidth:1
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})