// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,FlatList,Image,ImageBackground,StyleSheet, TouchableOpacity} from 'react-native';

// 引入第三方插件
import { RRCLoading,RRCAlert } from 'react-native-overlayer';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

// 自定义谜语分类组件并导出
export default class Cate extends Component{
    constructor(props){
        super(props);
        this.state={
            // 初始化谜语分类数据
            data:[],
            // 定义一个控制提示语展示的开关  false:显示提示语  true:关闭提示语现实中正常的列表数据
            buffer:false
        }
    }

    // 通过对象函数的方式配置标题
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '谜语分类'),
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

    // 定义一个获取谜语分类数据的方法
    getcateData=()=>{
        fetch(`https://route.showapi.com/151-3?showapi_appid=92246&showapi_sign=2adca32b0d604a70aed7bdc8bee610b4`)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 给data重新赋值
                this.setState({
                    data:responseData.showapi_res_body.typeList,
                    buffer:true
                })
                // 关闭提示
                RRCLoading.hide()
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // 定义生命周期函数
    componentDidMount(){
        // 提示数据加载中。。。。
        RRCLoading.show('数据加载中...')
        // 调用获取谜语分类数据的方法
        setTimeout(()=>{
            this.getcateData()
        },2000)   
    }

    // 组装数据
    _renderItem=({item,index})=>{
        return (
            <TouchableOpacity
                onPress={
                  ()=>this.props.navigation.navigate('DescRouter',{id:item.id,title:item.name})
                }
            >
                <View style={styles.row}>
                    <Text style={{color:'black',fontSize:23}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 友好提示
    _ListEmptyComponent=()=>{
        return (
            <View style={styles.tishi}>
                <Text >Loading......</Text>
                <Image source={require('../image/car_list_loading.gif')}></Image>
            </View>
        )
    }

    render(){
        // 第二种提示语方案
        // if(!this.state.buffer){
        //     return this._ListEmptyComponent()
        // }
        return (
            <ImageBackground source={require('../image/bg.jpg')} style={styles.img} opacity={0.6}>
                {/* <Text>{this.props.navigation.getParam('title')}</Text>
                <Text>{this.props.navigation.getParam('age')}</Text>
                <Button title="修改参数" onPress={
                    ()=>this.props.navigation.setParams({title:'标题',age:50})
                }></Button> */}
                {/* <Button title="返回" onPress={
                    ()=>this.props.navigation.goBack()
                }></Button>
                <Button title="跳转到desc页面" onPress={
                    ()=>this.props.navigation.navigate('DescRouter')
                }></Button> */}
                <FlatList 
                    ref = 'flatref'
                    // 设置循环遍历的数据源
                    data={this.state.data}
                    // 组装数据
                    renderItem={this._renderItem}
                    // 设置key
                    keyExtractor={item=>item.id}
                    // 第一种提示语方案：ListEmptyComponent
                    // 当数据为空或者是还没有拿到的时候可以用此属性做友情提示
                    // ListEmptyComponent={this._ListEmptyComponent}
                />
                <ActionButton
                    buttonColor="orange"
                    size={25}
                    offsetX={10}
                    onPress={() => {
                        // 获取flatlist实例
                        let object = this.refs.flatref;
                        object.scrollToOffset({animated: true, offset:0})
                    }}
                    renderIcon={()=>(
                        <Icon name="arrow-up" size={15} color="black"/>
                    )}
                />
            </ImageBackground>     
        )
    }
}

// 定义样式表
const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    row:{
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        borderColor:'#2196f3',
        borderWidth:1,
        marginTop:5,
        borderBottomWidth:4,
        borderBottomColor:'#808080'
    },
    tishi:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})