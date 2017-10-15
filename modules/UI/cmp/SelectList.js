import React from 'react'

import { View, Text } from 'react-native'

import Touchable from './Touchable'

const styles = {
    list: {

    },
    item: {
        padding: 10,
        borderColor: '#eee'
    }
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
        } else {
            this.setState({
                selected: ''
            })
        }
    }

    render() {
        return (
            <View style={ styles.list } >{
                this.props.items.map((item, k) => {
                    if (this.state.selected === '' || this.state.selected === item) {
                        return (
                            <Touchable key={k} onPress={ this.onPressItem.bind(this, item) } >
                                <View style={ [styles.item, (this.state.selected === item ? {borderColor: BLUE} : {} )] }>
                                    <Text>{ item }</Text>
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