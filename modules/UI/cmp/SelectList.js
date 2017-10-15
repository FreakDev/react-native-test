import React from 'react'

import { View, Text } from 'react-native'
import { BLUE, GREEN } from '../colors'

import Touchable from './Touchable'

const styles = {
    list: {

    },
    item: {
        alignItems: 'center',
        margin: 5,
        borderRadius: 3,
        borderWidth: 1,
        padding: 12,
        borderColor: '#cecece',
        backgroundColor: '#fafafa'
    },
    itemText: {
        color: BLUE
    },
    itemSelected: {}
}

styles.itemSelected = {
    ...styles.item,
    borderColor: GREEN,
    backgroundColor: '#fff',
}

styles.itemSelectedText = {
    color: GREEN    
}

export default class SelectList extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selected: ''
        }

        this.onPressItem = this.onPressItem.bind(this)
    }

    onPressItem(itemPressed) {
        if (this.state.selected != itemPressed) {
            this.setState({
                selected: itemPressed
            })
            this.props.onChange && this.props.onChange(itemPressed)
        } else {
            this.setState({
                selected: ''
            })
            this.props.onChange && this.props.onChange('')            
        }
    }

    render() {
        return (
            <View style={ styles.list } >{
                this.props.items.map((item, k) => {
                    if (this.state.selected === '' || this.state.selected === item) {
                        return (
                            <Touchable key={k} onPress={ this.onPressItem.bind(this, item) } >
                                <View style={ this.state.selected === item ? styles.itemSelected : styles.item } >
                                    <Text style={ this.state.selected === item ? styles.itemSelectedText : styles.itemText } >{ item }</Text>
                                </View>
                            </Touchable>
                        )                            
                    }
                    return null
                })
            }</View>
        )
    }
}