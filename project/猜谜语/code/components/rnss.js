// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

// 自定义组件并导出
export default class Demo extends Component{
    render(){
        return (
            // rn样式语法
            // 这些样式名基本上是遵循了 web 上的 CSS 的命名，
            // 只是按照 JS 的语法要求使用了驼峰命名法，例如将background-color改为backgroundColor
                // 1.行内样式:style={ {color:'red'} }
                // 2.样式表: style={ styles.box }
                // 3.组合方式: style={ [styles.text,styles.box,{fontSize:20}] }
            // 注意：
                // RN里面没有尺寸单位
                // 文本的样式不能加在view容器上只能放在text组件上
                // css属性名后面不能跟多个值例如：margin:10 20  border:1 solid red
            <View style={[styles.box,styles.border]}>
                <Text style={styles.text}>
                    <Text style={[{color:'red',fontSize:50}]}>hello</Text>
                </Text>
            </View>
        )
    }
}

// 定义样式表
const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:200,
        backgroundColor:'yellow'
    },
    border:{
        borderColor:'green',
        borderWidth:2,
        marginTop:10
    },
    text:{
        fontWeight:'bold'
    }
})