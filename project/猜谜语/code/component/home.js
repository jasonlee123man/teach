// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,Button,AsyncStorage} from 'react-native';


// 自定义导航标题组件
class LogoTitle extends Component {
    render() {
      return (
        <Image
          source={require('../image/logo.jpg')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
}

// 自定义组件并导出
export default class Home extends Component{


    // 配置标题栏
    static navigationOptions = {

        // headerTitle:<LogoTitle />,//使用自定义标题
        header:null,//隐藏导航
        title: 'Home', //配置标题文本内容
        headerStyle: {  //配置导航样式
            backgroundColor: '#f4511e',
            height:50,
            borderRadius:3,
            borderWidth:3,
            borderColor:'red',
            textAlign:"center"
        },
        headerTintColor: 'white', //配置标题内容颜色
        headerTitleStyle: {       //配置标题字体样式
            fontWeight: 'bold',
            fontSize:20
        },
        headerRight:(
            <Button title="搜索" style={{marginRight:50}}></Button>
        ),
        headerLeft:(
            <Button title="确定" style={{marginleft:50}}></Button>
            // <Image
            // source={require('../image/logo.jpg')}
            // style={{ width: 30, height: 30,marginLeft:50}}
        //   />
        ),
        headerLeftContainerStyle:{
            marginLeft:50
        },
        headerRightContainerStyle:{
            marginRight:50
        }
    };

    render(){

            return (
                <View style={styles.box}>
                    <Image source={require('../image/demo.jpg')} style={styles.img}></Image>
                    <Text style={styles.title}>Hello !!!
                        <Text style={{color:'#ff5511'}}> 谜 语</Text>
                    </Text>
                    <TouchableOpacity
                        onPress={
                            ()=>this.props.navigation.navigate('CateRouter',{title:'谜语分类',age:30})
                        }
                    >
                        <Text style={styles.button}>猜一猜</Text>
                    </TouchableOpacity>
                </View>
            )
        
   
       
    }
}

// 定义样式表   
    // 注意：Text组件上不支持flex布局
const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'white'
    },
    img:{
        width:170,
        height:170,
        marginBottom:20
    },
    title:{
        fontSize:28,
        marginBottom:150
    },
    button:{
        height:50,
        width:200,
        backgroundColor:'#2196f3',
        borderRadius:10,
        lineHeight:50,
        textAlign:"center",
        fontSize:25,
        color:'white',
        borderBottomColor:'#808080',
        borderBottomWidth:5
    }
})