import React, {Component} from 'react';
import {Text, View,Image,TouchableWithoutFeedback,TouchableHighlight} from 'react-native';
import {directToPage} from "../../utils/ext";

class CourseItem extends Component {
    render() {
        const {data,styles,navigation,index} = this.props
        return (
            <View>
                <TouchableHighlight
                    onPress={() => directToPage(navigation,'Detail',{courseId:data.id})}
                >
                    {/*index===0:第一条课程内容无需设置上外边距，后续的的则需要，否则课程内容都将挤在一起*/}
                    <View style={[styles.courseItem,index===0 && styles.courseItemFirst]}>
                        <View style={styles.imgView}>
                            <Image
                                style={styles.imgView}
                                source={{uri:data.img}}
                            />
                        </View>

                        <View style={styles.infoView}>
                            <Text
                                selectable={true}
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.courseName}
                            >
                                {data.course_name}
                            </Text>
                            <Text>
                                {data.price == 0 ? '免费':`￥${data.price}.00`}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default CourseItem;
