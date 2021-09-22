import React, {Component} from 'react';
import {View} from 'react-native';
import CourseItm from "./CourseItem";
import styles from "./styles"

class RecomCourseList extends Component {
    render() {
        const {recomCourseData,navigation} = this.props
        // alert(recomCourseData[1].course_img)
        return (

            <View style={styles.recomCourseBoard}>
                {
                    recomCourseData.map((item,index) => {
                        return (
                            <CourseItm
                                data={item}
                                styles={styles}
                                navigation={navigation}
                                key={index}
                            />
                        )
                    })
                }
            </View>
        );
    }
}

export default RecomCourseList;
