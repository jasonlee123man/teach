// 引入需要的基础组件
import React,{Component} from 'react';
import {View,Text,Image,ImageBackground, StyleSheet} from 'react-native';

// 自定义组件并导出
export default class Demo extends Component{
    render(){
        // images组件使用：
            // 本地资源
                // <Image source={ require('../image/qq.jpg') }></Image>
            // 网络资源  
                // 注意一定要给资源设置宽和高
                // <Image source={ {uri:'http://i.serengeseba.com/uploads/i_0_3459718935x2606107009_26.jpg'} }></Image>
        
        // ImageBackground组件使用语法同image：
            // 注意：不管是本地的资源还是网络资源都要给宽和高
            // opacity:可以单独控制自己的透明度而不影响到其内部的子元素 
        // 配置gif动图：（注意Rn默认不支持动图需要配置）
            // 需要在android/app/build.gradle文件中的dependencies位置添加以下模块：
                // implementation "com.facebook.fresco:animated-gif:1.10.0"
                // 然后重新启动项目
        return (
            <View>
                <ImageBackground 
                source={ require('../image/time.jpg') } 
                style={{ width:'100%',height:'100%'}}
                opacity={0.5}
                >
                     {/* 本地资源 */}
                    <Image source={ require('../image/qq.jpg') } style={styles.img}></Image>
                    {/* 网络资源 */}
                    <Image source={ {uri:'http://i.serengeseba.com/uploads/i_0_3459718935x2606107009_26.jpg'} } style={styles.img}></Image>
                    {/* gif动态图片 注意Rn默认不支持动图 */}
                    <Image source={require('../image/404.gif')}></Image>
                </ImageBackground>
            </View>
        )
    }
}

// 定义样式表
const styles = StyleSheet.create({
    img:{
        width:200,
        height:200
    }
})