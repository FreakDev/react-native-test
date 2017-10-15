import React from 'react'

import { View } from 'react-native'

export default ({children, style}) => {
    const stylesheet = Object.assign({}, style, { position: 'absolute', top: 0, bottom: 0, justifyContent: 'center'})
    return (
        <View style={ stylesheet } >
            {children}
        </View>
    )
}