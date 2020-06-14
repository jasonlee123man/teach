// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,RefreshControl} from 'react-native';

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

    render(){
        let list = movieData.map((item,index)=>{
            return (
                <View key={index} style={styles.row}>
                    <Image source={{uri:item.posters.thumbnail}} style={styles.img}></Image>
                    <View style={styles.info}>
                        <Text>{item.title}</Text>
                        <Text>{item.year}</Text>
                    </View>
                </View>
            )
        })
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={['red','green','orange']}
                        progressBackgroundColor='#DDD'
                        size={1}
                        progressViewOffset={300}
                    />
                }
            >    
                {list} 
            </ScrollView>
        )
    }
}


// 定义样式表
const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        marginTop:5
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