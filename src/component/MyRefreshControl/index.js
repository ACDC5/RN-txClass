import React, {Component} from 'react';
import {RefreshControl} from 'react-native';

class MyRefreshControl extends Component {
    render() {
        const {isRefreshing,onPageRefresh} = this.props
        return (
            //TODO 复用失败，没有显示任何数据
            <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onPageRefresh}
                colors={['#8a2be2','#5f7ea1']}//该属性值的类型必须是一个数组
                // title={title} //都是苹果才有的属性，还有titleColor属性
                // titleColor={titleColor}
            />
        );
    }
}

export default MyRefreshControl;
