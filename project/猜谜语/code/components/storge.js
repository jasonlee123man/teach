// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text, Button,AsyncStorage} from 'react-native';

// 自定义组件并导出
export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            buffer:true,
            name:''
        }
    }

    // 通过对象函数的方式配置标题
    static navigationOptions = ({ navigation }) => {
    return {
        title: '我的',
        headerStyle: {  //配置导航样式
            backgroundColor: '#f4511e',
            height:50,
            borderRadius:3,
        // borderWidth:3,
        // borderColor:'red',
        // textAlign:"center"
        },
        headerTintColor: 'white'
        };
    };


    // 
    componentWillMount=async()=>{
        let name = await AsyncStorage.getItem('name');
        if(name){
            await this.setState({buffer:false,name})
        }
        
    }

    // 设置缓存
    set=()=>{
       console.log('设置');
       AsyncStorage.setItem('name','张三',(error)=>{
            console.log('存储成功')
            this.setState({buffer:false})
       })
    //注意：注意值必须是字符串值，非字符串数据必须先序列化为字符串 JSON.stringify()
    //    AsyncStorage.setItem('userinfo',JSON.stringify([{name:'李四',age:30}]),(error)=>{
    //         console.log(error);
    //         console.log('存储成功')
    //    })
    }
    // 获取缓存
    get(){
        // AsyncStorage.getItem('userinfo',(error,result)=>{
        //     console.log(error);
        //     console.log(JSON.parse(result));
        // })
        AsyncStorage.getItem('name',(error,result)=>{
            console.log(error);
            console.log(result);
        })
    }

    // 清除缓存
    clear(){
        AsyncStorage.removeItem('name',(result)=>{
            console.log(result)
        })
    }

    // 清除所有缓存
    clears(){
        AsyncStorage.clear((result)=>{
            console.log(result)
        })
    }
    render(){
   
        return (
            //要使用react-native元生组件首先先引入 
            //注意必须有一个根容器
            // jsx语法：
            //    项目里面当遇到 < >号的时候就当成标签解析，遇到{}号的时候当成js语法解析
            //注意文本必须要放在Text组件中才能输出
            <View>
                <Text>本地缓存</Text>
                <Button title="设置缓存" onPress={this.set}></Button>
                <Button title="获取缓存" onPress={this.get}></Button>
                <Button title="清除制定key缓存" onPress={this.clear}></Button>
                <Button title="清除所有缓存" onPress={this.clears}></Button>
            </View>
        )
    }
}