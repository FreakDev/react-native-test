import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { BLUE } from '../colors'

import Touchable from './Touchable'

export default ({ style }) => {
    return (
        <Touchable style={style}>
            <Icon style={{ marginTop: 10 }} name="menu" size={17} color={ BLUE } />
        </Touchable>
    )
}

