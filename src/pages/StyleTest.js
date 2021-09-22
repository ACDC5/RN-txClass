import React, {Component} from 'react';
import {StyleSheet, View,ScrollView} from 'react-native';
//TODO 布局&样式 https://reactnative.cn/docs/0.64/flexbox#justify-content
class StyleTest extends Component {
    render() {
        return (
            <View style={[styles.container,{flexDirection:'column'}]}>
                <View style={{flex:1,backgroundColor:'red'}}></View>
                <View style={{flex:2,backgroundColor:'darkorange'}}></View>
                <View style={{flex:3,backgroundColor:'green'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    }
})

export default StyleTest;
