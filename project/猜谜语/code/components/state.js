// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';


// 自定义组件并导出
export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            max:'大小了，吹点气',
            min:'太大了，放放气',
            size:100
        }
    }

    // ==================================生命周期函数==================================
    // componentWillMount()  组件挂载前
    componentWillMount(){
        console.log('组件挂载前')
    }
    // componentDidMount()  组件挂载后
    componentDidMount(){
        //获取网络数据
        console.log('组件挂载后')
    }
    // shouldComponentUpdate(nextProps,nextState)   当组件接收到新的属性和状态改变的话
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.size)
        console.log('是否要修改属性或者状态',nextState);
        // 注意一定要返回一个bool ：false(表示不同意继续修改操作)  true(表示同意继续修改操作)
        // 如果不写这个生命生命函数默认是返回true
        return true
    }
    // componentWillUpdate(nextProps,nextState)   修改前
    componentWillUpdate(nextProps,nextState){
        console.log('修改前',nextState)
    }
    // componentDidUpdate(nextProps,nextState)    执行修改
    componentDidUpdate(nextProps,nextState){
        console.log('执行修改',nextState)
    }
    // componentWillUnmount()    组件销毁前
    componentWillUnmount(){
        console.log('组件销毁前')
    }
  
    // 定义缩小气球大小的方法
    change=()=>{
        this.setState({
            size:this.state.size-10
        })
    }

    // 获取气球大小
    getSize=()=>{
        return this.state.size;
    }

    render(){
        console.log('页面渲染render')
        // 点击事件是:onPress
        // 状态修改管理：this.setState({}) 等同于小程序中的this.setData({})
        return (
            <View style={styles.box}>
              <Button title={this.state.max}
                onPress={()=>this.setState({size:this.state.size+10})}
              ></Button>
              <Image source={ require('../image/qq.jpg') } 
                style={ {width:this.state.size,height:this.state.size} } 
                ></Image>
              <Button title={this.state.min}
                onPress={this.change}
              ></Button>
                <Text>{this.getSize()}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        flex:1,  
        justifyContent:'center',
        alignItems:"center" ,
        backgroundColor:'white' 
    }
})