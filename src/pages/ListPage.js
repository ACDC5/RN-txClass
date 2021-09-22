'use strict';
import React, {Component} from 'react';
import {View, ScrollView,RefreshControl} from "react-native";
import ListModel from "../module/List";
import ListTab from "../component/ListTab";
import CourseList from "../component/CourseList"; //复用这个组件
import MyRefreshControl from "../component/MyRefreshControl"; //复用组件

import commonStyles from "../styles/commonStyles"; //需要使用到一些公共样式

const listModel = new ListModel()

export default class ListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldData:[],//课程分类
            curIdx:0,
            curField:'all',
            courseData:{}, //课程数据
            isRefreshing:false
        }
    }

    /**
     * 获取课程分类
     *
     * **/
    getCourseFields() {
        listModel.getCourseFields().then((res) => {
            let data = res.result
            this.setState({
                fieldData:[{field:'all','field_name':'全部课程'}].concat(data)
            })
        })
    }

    /**
     * 获取指定分类课程的数据
     * */
    async getCourses(field) {
        try {
            //根据传入的field获取对应的课程list数据
            const listData = await listModel.getCourses(field)
            //将获取的数据放入到对应的课程分类(field)中
            this.state.courseData[field] = listData.result

            setTimeout( () => {
                this.setState({
                    //将获的数据放入courseData
                    courseData:this.state.courseData,
                    isRefreshing:false
                })
            },1000)


        }catch (e) {
            alert('发生错误，getCourses函数出错：'+ e)
        }

    }
    componentDidMount() {
        this.getCourseFields()
        this.getCourses(this.state.curField)
    }


    /** @param field 课程分类
     *         index 课程分类的下标
     *
    * 做两件事，1当点击课程分类时聚焦当前点击的分类
    *          2 点击课程分类时，展示对应的课程列表，
    *            如果有缓存数据则使用，没有测发起请求获取数据
    * */
    onTabClick = (field,index) => {
        this.setState({//setState是异步函数
            curIdx:index,
            curField:field
            //setState的回调函数相当于ComponentDidupdate函数的作用，
            // 即组件状态更新后触发的组件更新
        },() => {
            const {courseData,curField} = this.state

            //当本地状态(缓存池)没有数据时，发起网络请求以获得数据
            !courseData[curField] && this.getCourses(curField)
        })
    }

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
        this.getCourses(this.state.curField)//重新获取数据
    }

    render() {
        const {fieldData,curIdx,courseData,curField,isRefreshing} = this.state
        const {navigation} = this.props
        return(
            <View style={commonStyles.container}>
                {/*课程分类*/}
                <ListTab
                    fieldData={fieldData}
                    onTabClick={this.onTabClick}
                    curIdx={curIdx}
                />
                {/*每个课程分类下的课程数据*/}
                <ScrollView
                    ShowVerticalScrollIndicator={false}
                    refreshControl=
                        {
                            // TODO https://www.bilibili.com/video/BV1HD4y127fR?p=15
                            // <MyRefreshControl
                            //     isRefreshing={isRefreshing}
                            //     onPageRefresh={this.onPageRefresh}
                            // />
                            //因为有多个页面需要使用下拉刷新功能，所有将下面的功能打包成一个组件，方便复用
                            this.renderRefreshControl({
                                isRefreshing,
                                onPageRefresh:this.onPageRefresh,
                                color:['#8a2be2','#5f7ea1']
                                // titleColor:'#666',
                                // title:'正在加载中',

                            })
                    }
                >
                    {
                        // 当数据存在时才去渲染组件
                        courseData[curField] &&
                        <CourseList courseData={courseData[curField]}
                                    navigation={navigation}
                        />
                    }
                </ScrollView>
            </View>
        );
    }
}
