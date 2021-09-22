
import React,{Component} from 'react'
import styles from './styles'
import {Image,View} from 'react-native'

export default class Logo extends Component {
    render() {
        return(
            <Image
                style={styles.logo}
                source={require('../../asset/img/logo192-3x_62.png')}
            />
        )
    }
}
