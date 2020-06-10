// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text, Button,AsyncStorage,ImageBackground, StyleSheet,TextInput, TouchableOpacity, ToastAndroid} from 'react-native';


// 自定义组件并导出
export default class User extends Component{

    constructor(props){
        super(props);
        this.state={
            // 用户的账号
            name:"",
            // 用户的密码
            pwd:'',
            // 控制登录页面和欢迎界面的开关   true:展示登录界面  false:欢迎界面
            buffer:true
        }
    }

    // 通过对象函数的方式配置标题
    static navigationOptions = ({ navigation }) => {
    return {
        header:null,
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


    //定义生命周期函数判断用户是否登录
    componentWillMount= async ()=>{
        // 获取用户在缓存中的name
        let name = await AsyncStorage.getItem('name');
        if(name){
            this.setState({name,buffer:false})
        }
    }

    // 执行登录事件
    login=()=>{
        // 获取用户输入的用户名字和密码
        let username = this.state.name;
        let userpwd = this.state.pwd; 

        // 先在本地判断用户输入的账号和密码是否为空
        if(username == '' || username == null){
            ToastAndroid.showWithGravity(
                '请输入账号',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
            return false;
        }
        if(userpwd == '' || userpwd == null){
            ToastAndroid.showWithGravity(
                '请输入密码',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
            return false;
        }


        // 将用户的账号存储在本地缓存中
        AsyncStorage.setItem('name',username,()=>{
            // 将登陆界面关掉展示用户欢迎界面
            this.setState({buffer:false})
        })

        //将用户的账号和密码发送给后端（java  phphh）
        // fetch(`https://www.zhonggong.com/login?name=${username}&pwd=${userpwd}`)
        //     .then((response)=>response.json)
        //     .then((responseData)=>{
        //         //后端返回的数据格式： {code:1,msg:'校验成功',data:null}
        //         //后端返回的数据格式： {code:0,msg:'账号不存在',data:null}
        //         let code = responseData.data.code;
        //         if(code == 1){//在后天校验成功
        //             // 将用户的账号存储在本地缓存中以供后期业务需要
        //         }else{//后台校验失败
        //             // 提示用户
        //             alert(responseData.data.msg)
                        // return false;
        //         }
        //     })
        //     .catch()
        // console.log(username,userpwd)
    }


    // 清除所有缓存
    clears=()=>{
        AsyncStorage.clear((result)=>{
            this.setState({name:'',pwd:'',buffer:true})
        })

    }

    render(){
        if(this.state.buffer){
            return (
                <ImageBackground source={require('../image/login.jpg')} style={styles.img}>
                    <View style={styles.login}>
                        <Text style={styles.title}>welcome to Login</Text>
                        <TextInput 
                            value={this.state.name} 
                            onChangeText={(name)=>this.setState({name})} 
                            placeholder="请输入账号" 
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.pwd} 
                            onChangeText={(pwd)=>this.setState({pwd})} 
                            placeholder="请输入密码" 
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={this.login}>
                            <Text style={styles.lobut}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        }
        return (
            <View>
                <Text>欢迎您：{this.state.name}</Text>
                <Button title="退出登陆" onPress={this.clears}></Button>
            </View>
        )
    }
}

// 定义样式表
const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    login:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:'orange',
        marginBottom:40
    },
    input:{
        width:200,
        height:40,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginTop:10
    },
    lobut:{
        width:200,
        height:40,
        backgroundColor:'#2196f3',
        borderRadius:10,
        textAlign:"center",
        lineHeight:40,
        color:'white',
        marginTop:50
    }
}) 