import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CourseItem from "./CourseItem";
import styles from './styles'

class CourseList extends Component {
    render() {
        const {courseData,navigation} = this.props
        return (
            <View style={styles.courseBoard}>
                {
                    courseData.map((item,index) => {
                        return <CourseItem
                                styles={styles}
                                data={item}
                                index={index}
                                key={index}
                                navigation={navigation}
                            />
                    })
                }
            </View>
        );
    }
}

export default CourseList;
