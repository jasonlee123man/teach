// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';

// 自定义组件并导出
export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render(){
        // 组装新闻数据
        // Text:属性：numberOfLines  ：控制文本展示的行数
        // TextInput：输入框组件
            // 属性： value
                    // onChangeText
                    // placeholder
        let list = this.props.newlist.map((item,index)=>{
            return(
                <View key={index} style={styles.row}>
                    <Text
                        numberOfLines={1}
                        onPress={()=>alert(item)}
                    >{item}</Text>
                </View>
            )
        })
        return (
            <View style={styles.list}>
                <View style={styles.searchbox}>
                    <TextInput  
                        style={styles.search} 
                        value={this.state.text} 
                        onChangeText={
                            (content)=>this.setState({text:content})
                        }
                        placeholder='请输入内容'
                    />
                    <Button title="搜索" 
                        onPress={()=>alert(this.state.text)}
                    ></Button>
                </View>
                <Text style={styles.title}>今日要闻</Text>
                {list}
            </View>
        )
    }
}

// 定义样式表
const styles = StyleSheet.create({
    list:{
        padding:10
    },
    row:{
        marginTop:5
    },
    title:{
        color:"red",
        fontSize:22
    },
    searchbox:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    search:{
        borderWidth:1,
        borderColor:"gray",
        height:36,
        width:180, 
    }
})
