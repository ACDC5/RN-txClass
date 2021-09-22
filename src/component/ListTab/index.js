import React, {Component} from 'react';
import {Text, View,ScrollView} from 'react-native';
import TabItem from './TabItem'

import styles from './styles';

class ListTab extends Component {
    render() {
        const {fieldData,onTabClick,curIdx} = this.props
        return (
            <View style={styles.tabContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {fieldData.map((item,index) => {
                        return (
                            <TabItem
                                key={index}
                                index={index}
                                data={item}
                                curIdx={curIdx}
                                onTabClick={onTabClick}
                                styles={styles}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default ListTab;
