// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

// 引入props类型检测模块
import PropTypes from 'prop-types';

// 自定义组件并导出
export default class Demo extends Component{

    // 定义默认props属性
    static defaultProps = {
        work:'it工作者',
    }

    // 设置props属性类型
    static propTypes = {
        age:PropTypes.number,
        hopy:PropTypes.string
    }

    render(){
        return (
            <View style={styles.box}>
                <Text>{this.props.name} </Text>
                {/* <Text>{this.props.user.age} </Text>
                <Text>{this.props.user.hopy}</Text> */}
                <Text>{this.props.age} </Text>
                <Text>{this.props.hopy}</Text>
                <Text>{this.props.work}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        flex:1,  
        justifyContent:'center',
        alignItems:"center" 
    }
})