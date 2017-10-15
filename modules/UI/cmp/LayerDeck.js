import React from 'react'

import { Stylesheet, View } from 'react-native'

export default class LayerDeck extends React.Component {

    constructor(props) {
        super(props)

        this._onLayout = this._onLayout.bind(this)
    }

    state = {
        width: 0,
        height: 0
    }

    _onLayout(e) {
        this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
        })
    }

    

    render() {
        const { visibleLayers = [], children } = this.props
        return (
            <View style={{ flex: 1 }} onLayout={ this._onLayout } >{                
                React.Children.map(children, (child) => {
                    const visible = visibleLayers.indexOf(child.props.name) !== -1
                    return React.cloneElement(child, { visible, dimensions: { width: this.state.width, height: this.state.height } })
                })
            }</View>
        )
    }
}