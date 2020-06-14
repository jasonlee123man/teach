// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

//引入电影数据
import movie  from '../movie.json';
let movieData = movie.movies;
// console.log(movieData);

// 自定义组件并导出
export default class Demo extends Component{
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
            <View>    
                {list} 
            </View>
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