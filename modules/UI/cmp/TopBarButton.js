import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { YELLOW, BLUE } from '../colors'
import Touchable from './Touchable'

const styles = {
    btn: {
        alignItems: 'center'
    }
}

export default ({ text, icon, style, onPress }) => {
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={ Object.assign({}, style, styles.btn) }>
                <Icon name={ icon } size={25} color={ YELLOW } />
                <Text style={{ fontSize: 12, color: BLUE }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}