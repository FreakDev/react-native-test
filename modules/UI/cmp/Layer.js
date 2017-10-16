import React from 'react'

import { Animated, View } from 'react-native'

export default class Layer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            transform: new Animated.ValueXY(),
        }
    }

    moveLayer(moveIn, animated = true) {
        let targetValue = {x: 0, y: 0}
        if (!moveIn) {
            switch (this.props.from) {
                case 'left':
                    targetValue = {x: -this.props.dimensions.width, y: 0}
                    break
                case 'right':
                    targetValue = {x: this.props.dimensions.width, y: 0}
                    break
                case 'top':
                    targetValue = {x: 0, y: -this.props.dimensions.height}
                    break
                case 'bottom':
                    targetValue = {x: 0, y: this.props.dimensions.height}
                    break
            }
        }

        let animTime = 250
        if (!animated) {
            animTime = 0            
        }

        Animated.timing(
            this.state.transform,
            {
                toValue: targetValue,
                duration: animTime,
            }
        ).start();
    }

    componentDidUpdate(prevProps) {
        this.moveLayer(this.props.visible, prevProps.dimensions.width === 0 ? false : true);
    }

    render () {
        const { children, style } = this.props
        const transform = this.state.transform.getTranslateTransform()
        return (
            <Animated.View style={[{ flex: 1, transform, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }, style]} >
                { children }
            </Animated.View>
        )
    }
}