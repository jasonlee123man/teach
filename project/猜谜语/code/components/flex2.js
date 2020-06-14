// 引入基础组件
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

// 自定义组件
export default class Flex extends Component{

    render(){

        // flex布局
            // 注意：
            // 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，
            // 也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
            // 在Rn里面天然及时flex布局的，所以不需要display:flex去制定flex布局
            // RN与pc端中flex布局的不同点：
                // flex属性后面不支持多个参数
                // flexDirection:属性默认是：column而不是row
        return(
            <View style={styles.box}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
            </View>
        )
    }
}



// 定义样式表
const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"yellow"
    },
    box1:{
        flex:1,
        backgroundColor:"red"
    },
    box2:{
        flex:2,
        backgroundColor:"green"
    },
    box3:{
        flex:3,
        backgroundColor:"purple"
    },
    
})