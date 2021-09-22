import React, {Component} from 'react';
import {Text, View,TouchableWithoutFeedback,Image} from 'react-native';
import {directToPage} from "../../utils/ext";

class SwiperItems extends Component {

    render() {
        const {data,styles,navigation} = this.props

        return (
            <TouchableWithoutFeedback
                style={styles.swiperSize}
                onPress={() => {
                    directToPage(navigation,'Detail',{
                        courseId:data.course_id
                    })
                }}
            >
                <Image
                   style={styles.swiperSize}
                   source={{uri:data.img}}
                />
            </TouchableWithoutFeedback>
        );
    }
}

export default SwiperItems;
