import React from 'react'

import { View } from 'react-native'

export default ({ children }) => (
    <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} >
        { children }
    </View>
)