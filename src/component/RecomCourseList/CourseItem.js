import React, {Component} from 'react';
import {Text, View,Image,TouchableWithoutFeedback} from 'react-native';
import {directToPage} from "../../utils/ext";

class CourseItm extends Component {
    render() {
        const {data,styles,navigation} = this.props
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    directToPage(navigation,'Detail',{courseId:data.id})
                }}
            >
                <View style={styles.courseItem}>
                    <View style={styles.imgView}>
                        <Image
                            style={styles.imgView}
                            source={{uri:data.course_img}}
                        />
                    </View>

                    <View style={styles.courseName}>
                        <Text style={styles.courseNameText}>
                            {data.course_name}
                        </Text>
                    </View>

                    <View style={styles.teacherInfo}>
                        <Image
                            style={styles.teacherImg}
                            source={{uri:data.teacher_img}}
                        />
                        <Text style={styles.teacherName}>
                            {data.teacher_name}
                        </Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.priceNum}>
                            ￥{data.price}.00
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default CourseItm;
