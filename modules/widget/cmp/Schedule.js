import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import { SelectList, HorizontalCenter, Touchable } from '../../../modules/UI'
import { GREEN } from '../../../modules/UI/colors'

export default class Schedule extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            day: '',
            timeFrame: '',
            validateOpacity: 0.4
        }

        this.selectDay = this.selectDay.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.validate = this.validate.bind(this)
    }

    selectDay(day) {
        nextState = {
            day: this.state.day,
            timeFrame: this.state.timeFrame
        }

        if (day === '')
            this.selectTime('')

        nextState.day = day

        this.setState(nextState)
    }

    selectTime(timeFrame) {
        if (timeFrame !== '')
            this.setState({
                timeFrame,
                validateOpacity: 1
            })
        else 
            this.setState({
                timeFrame: '',
                validateOpacity: 0.4
            })
    }

    validate() {
        this.props.onValidate && this.props.onValidate({ day: this.state.day, time: this.state.timeFrame })
    }

    render() {
        const { title } = this.props
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 10 }} >
                    <View style={{ alignItems: 'center' }} >
                        <Text>{ title }</Text>
                    </View>                
                    <SelectList onChange={ this.selectDay } items={['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']} />{
                    this.state.day !== '' ? (
                        <View style={{ flexDirection: 'row' }} >
                            <View style={{ flex: 1 }} >
                                <View style={{ alignItems: 'center' }} >
                                    <Text>Matin</Text>
                                </View>
                                <SelectList onChange={ this.selectTime } items={['10h30 - 11h', '11h - 11h30', '11h30 - 12h', '12h - 12h30','12h30 - 13h', '13h - 13h30','13h30 - 14h']} />
                            </View>
                            <View style={{ flex: 1 }} >
                                <View style={{ alignItems: 'center' }} >
                                    <Text>Soir</Text>
                                </View>
                                <SelectList onChange={ this.selectTime } items={['18h30 - 19h', '19h - 20h30', '20h30 - 21h', '21h - 21h30','21h30 - 22h', '22h - 22h30','22h30 - 13h']} />
                            </View>
                        </View>
                    ): null
                }</View>
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