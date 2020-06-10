// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,FlatList,RefreshControl, Button,TouchableOpacity} from 'react-native';

//引入电影数据
import movie  from '../movie.json';
let movieData = movie.movies;
// console.log(movieData);

// RefreshControl组件里面常用属性介绍：
    /*onRefresh：开始刷新时调用
    refreshing：设置为true显示指示器，false：隐藏。
    colors（android）：指示器颜色，可以多个，循环显示。
    progressBackgroundColor（android）：指示器背景颜色
    size（android）：值：[0,1]。指示器大小，默认1，0:large
    progressViewOffset（android）：指示器距离顶部的位置，默认0.
    tintColor（ios）：指示器颜色
    title（ios）：指示器下显示的文字
    titleColor（ios）：指示器下显示的文字的颜色*/
    /*refreshing={this.state.isRefreshing} onRefresh={this._onRefresh} tintColor="#ff0000" title="Loading..." titleColor="#00ff00" size={0} progressViewOffset={30} colors={['#0000ff','#ff0000', '#00ff00', ]} progressBackgroundColor="#ffff00"*/
// 自定义组件并导出
export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            refreshing:false
        }
    }

    // 下拉更新时间
    _onRefresh=()=>{
        // 开启下拉刷新指示器
        this.setState({refreshing:true})
        
        // 获取最新的数据
        setTimeout(()=>{
            this.setState({refreshing:false})
        },2000)
    }

    // 设置头部组件
    _ListHeaderComponent=()=>{
        return(
            <View style={{width:'100%',height:50,justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:"purple",fontWeight:'bold',fontSize:20}}>欢迎访问电影资讯信息</Text>
                <Button title='快速到底部'
                    onPress={
                        ()=>{
                            // 先获取flatlist实例
                            let object = this.refs.flatref;
                            // 调用实例中的方法
                            // animated:控制跳转动画
                            object.scrollToEnd({animated:false});
                        }
                    }
                ></Button>
            </View>
        )
    }
    // 设置底部组件
    _ListFooterComponent=()=>{
        return (
            <View style={{width:'100%',height:50,justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:"red",fontWeight:'bold',fontSize:20}}>谢谢关注电影资讯....</Text>
                <Button title='快速到顶部'
                    onPress={
                        ()=>{
                            // 先获取flatlist实例
                            let object = this.refs.flatref;
                            // 调用实例中的方法
                            // animated:控制跳转动画
                            // offset:偏移量，0就是顶部
                            object.scrollToOffset({animated:false,offset:0})
                        }
                    }
                ></Button>
            </View>
        )
    }
    //组装数据
    _renderItem=({item,index})=>{
        return(
                <TouchableOpacity 
                    onPress={
                        ()=>{
                            // 先获取flatlist实例
                            let object = this.refs.flatref;
                            // 调用实例中的方法
                            // animated:控制跳转动画
                            // viewPosition:可视区域  0：顶部 0.5：中间 1：底部
                            // index：是数据的下标
                            object.scrollToIndex({animated:true,viewPosition:0,index})

                        }
                    }
                >
                    <View  style={styles.row}>
                        <Image source={{uri:item.posters.thumbnail}} style={styles.img}></Image>
                        <View style={styles.info}>
                            <Text>{item.title}</Text>
                            <Text>{item.year}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    } 

    // 设置分割线
    _ItemSeparatorComponent=()=>{
        return (
            <View
                style={{width:'100%',height:2,backgroundColor:'gray'}}
            ></View>
        )
    }

    // 上拉加载事件
    _onEndReached=()=>{
        // 注意为了提高列表渲染加载的性能，如果发现上拉后数据没有变化下次再上拉就不会触发次事件
        alert('加载数据了。。。')
    }


    render(){

        // TouchableOpacity：
            // 降低内部子组件的透明度
        return (
            <FlatList 
                // ref属性
                ref = "flatref"
                //代表需要循环遍历展示的数据 
                data={movieData}
                // 组装数据
                renderItem={this._renderItem}
                // 设置key
                keyExtractor={item=>item.id}
                // 设置头部
                ListHeaderComponent={this._ListHeaderComponent}
                // 设置底部
                ListFooterComponent={this._ListFooterComponent}
                // 设置行与行之间的分割线
                ItemSeparatorComponent={this._ItemSeparatorComponent}
                // 多列布局 呈Z形排列
                // numColumns={4}
                // 水平布局
                // horizontal={true}
                // 翻转滚动方向
                // inverted={true}
                // 下拉刷新
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={['red','green','orange']}
                        progressBackgroundColor='#DDD'
                        size={1}
                        // progressViewOffset={300}
                    />
                }
                // 上拉加载   上拉距离底部的空间取值大小是0-1（百分比）
                onEndReachedThreshold={0.2}
                onEndReached={this._onEndReached}
                

            />
        )
    }
}


// 定义样式表
const styles = StyleSheet.create({
    row:{
        flexDirection:"row"
    },
    img:{
        width:60,
        height:100,
        backgroundColor:"gray"
    },
    info:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})