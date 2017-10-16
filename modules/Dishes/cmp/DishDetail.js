import React from 'react'

import { View, Image, Text } from 'react-native'

import { BLUE, GREEN } from '../../../modules/UI/colors'

const styles = {
    wrapper: {
        padding: 5
    },
    content: {},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: BLUE
    },
    tagbar: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15
    },
    tag: {
        margin: 3,
        padding: 7,
        backgroundColor: '#EEEEEE',
        borderRadius: 3
    },
    tagText: {
        fontSize: 9,
        color: '#AAAAAA'
    },
    desciption: {},
    descriptionText: {
        fontSize: 12,
        fontWeight: 'normal',
        color: BLUE        
    }
}

export default ({ dish }) => {
    return (
        <View>
            <Image source={dish.photo} style={{ height: 220, width: undefined }} resizeMethod="scale" />
            <View style={ styles.wrapper } >
                <View style={ styles.content } >
                    <Text style={ styles.title } >{ dish.name }</Text>
                </View>
                <View style={ styles.tagbar } >{
                    dish.keywords &&
                    dish.keywords.map((keyword, k) => {
                        return (
                            <View key={k} style={ [styles.tag, keyword === 'VEGGIE' ? { backgroundColor: GREEN } : {}] } >
                                <Text style={ [styles.tagText, keyword === 'VEGGIE' ? { color: 'white' } : {}] } >{ keyword }</Text>
                            </View>
                        )
                    })
                }</View>
                <View style={ styles.description } >
                    <Text style={ styles.descriptionText } >{ dish.description }</Text>
                </View>
            </View>
        </View>
    )    
}