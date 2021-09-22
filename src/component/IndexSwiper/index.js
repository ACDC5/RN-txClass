import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper'
import styles from "./styles";
import SwiperItems from "./SwiperItems";

class IndexSwiper extends Component {

    render() {
        const {swiperData,navigation} = this.props
        const swiperHeight = styles.swiperSize.height;

        return (
            <View
                height={swiperHeight}
            >
                <Swiper
                    key={swiperData.length}
                    height={swiperHeight}
                    autoplay={true}
                    loop={true}
                    activeDotColor={'#000'}
                    paginationStyle={styles.pagination}
                >
                    {
                        swiperData.map((item,index) => {
                            return (
                                <SwiperItems
                                    data={item}
                                    key={index}
                                    styles={styles}
                                    navigation={navigation}
                                />
                                )
                        })
                    }
                </Swiper>
            </View>
        );
    }
}

export default IndexSwiper;
