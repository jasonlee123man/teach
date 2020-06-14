/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//  引入基础组件
import React, {Component} from 'react';
import {Text, View,StyleSheet, Button} from 'react-native';

// 注意：组件为了和html标签区分开首字母一定要大写
// import Demo from './components/demo';
// import Rnss from './components/rnss';
// import Flex from './components/flex';
// import Flex1 from './components/flex1';
// import Flex2 from './components/flex2';
// import Nav from './components/nav';
// import Image from './components/image';
import Props from './components/props';
import State from './components/state';
import Movie from './components/movie';
import Scrollview from './components/scrollview';
import Flatlist from './components/flatlist';
import Head from './components/head';
import List from './components/list';


// 自定义组件 class(业务组件)  function（木偶组件）
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      Comp:true
    }
  }

  // 定义获取state实例的方法
  getobject=()=>{
    //获取state组件实例
      // 第一种属性取值方式
        let object = this.refs.staterefs;
        console.log(object.getSize())  
      // // 第二种数组方式 
      //   let objects = this.refs['staterefs']
      //   console.log(objects)
      // 第三种方式
          // console.log(this.aaa);
  }
  render() {
    let user = {age:20,hopy:'篮球'}
    let Comp = this.state.Comp ? <State /> : <Props />;
    // 定义新闻列表数据
    let newlist =[
      '这个春天，疫情改变了世界，我们已经见证了太多的历史',
      '这个春天，疫情改变了世界，我们已经多的历史，以及感人的这个春天，疫',
      '这个春天，疫情改变了世界，我们的历史，以及感人的这个春天，疫',
      '这个春天，疫情改变了世界，我们已经见证了太多的历史，以及感人的这个春天，疫',
      '这个春天，疫情改变了世界，我们已经，疫',
    ]
    return (
      //注意：必须有一个根容器
      <View style={ {flex:1} }>
        {/* ===============================view text介绍====================== */}
        {/* <Demo /> */}
        {/* ===============================样式介绍============================ */}
        {/* <Rnss /> */}
        {/* <Flex /> */}
        {/* <Flex1 /> */}
        {/* <Flex2 /> */}
        {/* <Nav /> */}
        {/* ===============================image介绍============================ */}
        {/* <Image /> */}
        {/* ===========================props介绍================================ */}
        {/* props一般传值 */}
        {/* <Props name="李四" user={user}    /> */}
        {/* 解构传递props属性 */}
        {/* <Props name="李四"  {...user}    /> */}
        {/* =============================state介绍============================== */}
        {/* 第一种设置ref属性方式 */}
        {/* <State ref="staterefs" /> */}
        {/* 第二种设置ref属性方式 */}
        {/* <State ref={state=>this.aaa=state} /> */}
        {/* <Button title='获取state实例' onPress={this.getobject}></Button> */}
        {/* =============================模拟组件销毁案例==============================  */}
        {/* {Comp}
        <Button title="销毁state组件" 
          onPress={
            ()=>this.setState({
              Comp:!this.state.Comp
            })
          }
        ></Button> */}
        {/* =============================滚动视图==============================  */}
        {/* <Movie /> */}
        {/* <Scrollview /> */}
        {/* <Flatlist /> */}
        {/* ============================新闻案例==============================  */}
        <Head />
        <List newlist={newlist} />
  
      </View>
    );
  }
}

