'use strict';
import React, {Component} from 'react';
import {View,ScrollView,RefreshControl} from "react-native";
// import Calls from "../Calls";
import IndexModel from "../module/Index";
import IndexSwiper from "../component/IndexSwiper";
import MainTitle from "../component/MainTitle";
import RecomCourseList from "../component/RecomCourseList";
import CourseList from "../component/CourseList/index";
import {filterFieldData} from "../utils/ext";
import MyRefreshControl from "../component/MyRefreshControl";

const indexModel = new IndexModel()

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperData:[],
            fieldData:[],
            courseData:[],
            recomCourseData:[],
            isRefreshing:true //是否允许下拉刷新，true默认进入页面后自动进行刷新
        }
    }

    getCourseData() {
            indexModel.getCourseData().then((res) => {
                const data = res.result;
                setTimeout(() => {
                    this.setState({
                        swiperData:data.swipers,
                        fieldData:[{'field_name':'推荐课程'}].concat(data.fields),
                        courseData:data.courses,
                        recomCourseData:data.recomCourses
                        //setState的回调函数相当于ComponentDidupdate函数的作用，
                        // 即组件状态更新后触发的组件更新
                    },() => {
                        if(this.state.isRefreshing) {
                            this.setState({//下拉刷新获取数据后，下拉刷新结束
                                isRefreshing:false
                            })
                        }
                    })
                },1000)
            },(err) => {
                alert('发生错误: '+err)
            })
    }



    componentDidMount() {
        this.getCourseData()
    }

    renderTitleAndContext(data,key,recomCourseData,course_data,nvg) {
        if (data) {
            return (
                    <View key={key} >
                        {/*课程分类标题*/}
                        <MainTitle key={key} title={data ? data.field_name : null} />
                            {
                                //只在map第一次循环调用时执行true，因为推荐课程目前是固定的(用if会更简洁，但在这里会报代码规范相关的错误(使用webStorm编写时))
                                (key === 0 && data.field_name === '推荐课程' ) ? <RecomCourseList navigation={nvg} recomCourseData={recomCourseData} />
                                :
                                <CourseList
                                    courseData={filterFieldData(course_data,key-1,true)} //key-1,因为setState的fieldData第一个数据是人造数据，会导致过滤的field字段错误
                                    navigation={nvg}
                                />
                            }
                    </View>
            )
        }
        alert('没有找到课程分类标题')
    }

    //功能在复用组件中实现
    renderRefreshControl = (options) => {
        const {isRefreshing,onPageRefresh,titleColor,title,color} = options
        return <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onPageRefresh}
            colors={color} //该属性值的类型必须是一个数组
            // title={title} //都是苹果才有的属性，还有titleColor属性
            // titleColor={titleColor}
        />
    }

    onPageRefresh = () => {
        if(this.state.isRefreshing) { //正在下拉刷新中
            return
        }
        this.setState({isRefreshing:true}) // 手动下拉，开始刷新
        this.getCourseData()//重新获取数据
    }

    render() {
        const {navigation} = this.props,
            {swiperData,fieldData,courseData,recomCourseData,isRefreshing} = this.state
        return(
          <View>
              <View>
                  <ScrollView
                    // automaticallyAdjustContentInsets={false} //IOS的属性
                    showsVerticalScrollIndicator={false} //显示滚动条
                    refreshControl={
                        // <MyRefreshControl
                        //     isRefreshing={isRefreshing}
                        //     onPageRefresh={this.onPageRefresh}
                        // />
                        //因为有多个页面需要使用下拉刷新功能，所有将下面的功能打包成一个组件，方便复用
                        this.renderRefreshControl({
                            isRefreshing,
                            onPageRefresh:this.onPageRefresh,
                            color:['#8a2be2','#5f9ea0']
                            // titleColor:'#666',
                            // title:'正在加载中',

                        })
                    }
                  >
                      <IndexSwiper
                            swiperData={swiperData}
                            navigation={navigation}
                      />

                      {/*{this.renderTitleAndContext(null,'推荐课程')}*/}
                      {/*<RecomCourseList*/}
                      {/*    navigation={navigation}*/}
                      {/*    recomCourseData={recomCourseData}*/}
                      {/*/>*/}

                      {fieldData.map((item,index) => {
                          return this.renderTitleAndContext(item,index,recomCourseData,courseData,navigation)
                      })}
                  </ScrollView>
              </View>
          </View>
        );
    }
}
