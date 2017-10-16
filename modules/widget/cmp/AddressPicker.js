import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'

import { HorizontalCenter } from '../../../modules/UI/'
import { GREEN } from '../../../modules/UI/colors'

export default class AddressPicker extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            validateOpacity: 0.2
        }

        this.validate = this.validate.bind(this)
    }

    validate() {}

    render() {
        const { title} = this.props
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 9 }} >
                    <View style={{ alignItems: 'center' }} >
                        <Text>{ title }</Text>
                    </View>                
                    <MapView 
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} 
                        style={{ flex: 1, borderWidth: 1 }}/>
                </View>
                <View style={{ flex: 1 }} >
                    <TouchableOpacity style={{ flex: 1 }} onPress={ this.validate } >
                        <View style={{ flex: 1, backgroundColor: GREEN, alignItems: 'center', margin: 5, opacity: this.state.validateOpacity }} >
                            <HorizontalCenter>
                                <Text style={{ color: 'white' }}>VALIDER</Text>
                            </HorizontalCenter>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>                    
        )
    }
}