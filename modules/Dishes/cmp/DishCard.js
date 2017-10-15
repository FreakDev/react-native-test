import React from 'react'

import { View, Text, Image } from 'react-native'
import { Touchable, HorizontalCenter } from '../../UI'

import { BLUE } from '../../../modules/UI/colors'

const textBoxStyles = { 
    flexDirection: 'row',

    // iOS Box Shadow
    // shadowColor:'black', 
    // shadowOffset:{ width: 5, height: 5 }, 
    // shadowRadius: 5, 
    // shadowOpacity: 0.5,

    // Android Box Shadow
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'transparent', 
    elevation: 1,
}

const textStyles = {
    paddingLeft: 20,
    fontSize: 15,
    color: BLUE
}

export default ({ dish }) => {
    return (
        <View style={{ height: 280, marginBottom: 12, flexDirection: 'row'}}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 90 }}>
                <Touchable>
                    <View style={{ flex: 4 }}>
                        <Image source={dish.photo} style={{ height: 220, width: undefined }} resizeMethod="scale" />
                        <Text style={{ position: 'absolute', fontSize: 16, bottom: 15, left: 15, color: 'white' }}>{ dish.name }</Text>
                    </View>
                </Touchable>
                <View style={{ flex: 1, ...textBoxStyles }}>
                    <HorizontalCenter>
                        <Text style={ textStyles }>{ dish.price } €</Text>
                    </HorizontalCenter>
                    <View style={{ flex: 10, left: 30 }} />
                    <Touchable>
                        <View style={{ flex: 1, right: 10 }}>
                            <View style={{ flex: 2 }} />                        
                            <View style={{ backgroundColor: '#f5a623', flex: 4, alignItems: 'center', borderRadius: 3 }}>
                                <HorizontalCenter>
                                   <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                                </HorizontalCenter>
                            </View>
                            <View style={{ flex: 2 }} />
                        </View>
                    </Touchable>
                </View>
            </View>
            <View style={{ flex: 1 }} />
        </View>
    )
}