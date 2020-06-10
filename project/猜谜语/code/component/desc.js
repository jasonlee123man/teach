// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,FlatList,ImageBackground, ToastAndroid,StyleSheet,TouchableOpacity,RefreshControl} from 'react-native';

// 引入第三方插件
import { RRCLoading} from 'react-native-overlayer';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

// 自定义组件并导出
export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            // 初始化页面上需要的谜语详情数据
            data:[],
            // 初始化指示器开关
            refreshing:false
        },
        // 初始化页码
        this.page=1;
        // 设置存储总页数的变量
        this.allPages=0
        // 获取分类id
        const {navigation} = this.props;
        this.id = navigation.getParam('id');
    }

     // 通过对象函数的方式配置标题
     static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', '谜语详情'),
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

    // 定义获取谜语详情的方法
    getdesc=()=>{
        fetch(`https://route.showapi.com/151-4?showapi_appid=92246&showapi_sign=2adca32b0d604a70aed7bdc8bee610b4&typeId=${this.id}&page=${this.page}`)
        .then((response)=>response.json())
        .then((responseData)=>{
            // console.log(responseData)
            // 重新给页面赋值
            this.setState({
                data:this.state.data.concat(responseData.showapi_res_body.pb.contentlist)
            })
            // 获取总页码数
            this.allPages=responseData.showapi_res_body.pb.allPages
            // 关闭提示
            RRCLoading.hide()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // 定义生命周期函数
    componentDidMount(){
        // 提示用户数据加载中。。。
        RRCLoading.show('数据加载中...')
        // 获取数据
        this.getdesc();

    }

    // 组装数据
    _renderItem=({item,index})=>{
        return (
            <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={
                    // ()=>RRCAlert.alert(item.answer)
                    // ()=>alert(item.answer)
                    ()=>ToastAndroid.showWithGravity(
                        item.answer,
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    )
                }>
                    <Text style={styles.answer}>查看谜底</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // 下拉事件
    _onRefresh=()=>{
        // 提示用户数据更新中。。。
        RRCLoading.show('数据更新中...');
        // 把page重置成第一页
        this.page = 1;
        //清空列表数据
        // this.state.data=[];
        this.setState({data:[]})
        // 重新获取数据
        setTimeout(()=>{
            this.getdesc()
        },1000)
    }

    // 上拉事件
    _onEndReached=()=>{
        // 首先判断是否可以继续上拉
        if(this.allPages > this.page){//可以上拉
            // 提示用户数据加载中
            RRCLoading.show('数据加载中...');
            setTimeout(()=>{
                this.page++;
                this.getdesc();
            },1000)
        }else{//提示没有数据了
            ToastAndroid.showWithGravity(
                '我是有底线的',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        }
        // 提示用户
    }

    render(){
        return (
           <ImageBackground source={ require('../image/time.jpg') } style={styles.img}>
               <FlatList 
                    // 添加ref属性
                    ref = 'descref'
                    // 设置需要遍历的数据源
                    data={this.state.data}
                    // 组装数据
                    renderItem={this._renderItem}
                    // 定义key
                    keyExtractor={item=>item.id}
                    // 设置监听上拉事件的属性
                    onEndReached={this._onEndReached}
                    // 设置触底的距离
                    onEndReachedThreshold={0.2}
                    //设置下拉
                    refreshControl={
                        <RefreshControl 
                            //设置控制指示器是否显示属性   true  false
                            refreshing={this.state.refreshing}
                            // 设置下拉监听事件属性
                            onRefresh={this._onRefresh}
                        />
                    }
               />
                <ActionButton
                    buttonColor="orange"
                    size={25}
                    offsetX={10}
                    onPress={() => {
                        // 获取flatlist实例
                        let object = this.refs.descref;
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
        height:'auto',
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#2196f5',
        borderRadius:20,
        borderBottomColor:'#847f7b',
        borderBottomWidth:5,
        marginTop:5,
        justifyContent:"center",
        alignItems:"center",
        padding:5
    },
    title:{
        color:'white',
        fontSize:21
    },
    answer:{
        color:'white',
        fontSize:14,
        height:25,
        width:100,
        backgroundColor:'#ffa600',
        borderRadius:10,
        textAlign:"center",
        lineHeight:25
    }
})