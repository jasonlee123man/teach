// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text} from 'react-native';

// 自定义组件并导出
export default class Demo extends Component{
    render(){
        return (
            //要使用react-native元生组件首先先引入 
            //注意必须有一个根容器
            // jsx语法：
            //    项目里面当遇到 < >号的时候就当成标签解析，遇到{}号的时候当成js语法解析
            //注意文本必须要放在Text组件中才能输出
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}