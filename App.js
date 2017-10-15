import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HorizontalCenter, Burger, TopBarButton, LayerDeck, Layer, Touchable } from './modules/UI'
import { BLUE } from './modules/UI/colors'

import { Schedule } from './modules/widget'
import { DishList } from './modules/Dishes'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visibleLayers: [],
      basket: [],
      schedule: {},
      address: ''
    }

    this.showLayer = this.showLayer.bind(this)
    this.closeAllLayer = this.closeAllLayer.bind(this)

    this.validateSchedule = this.validateSchedule.bind(this)
  }

  showLayer(layer, show) {
    let nextState = this.state.visibleLayers.slice()
    let indexOf = nextState.indexOf(layer);
    if (!show && indexOf !== -1) {
      nextState.splice(indexOf, 1)
    } else if (show && indexOf === -1) {
      nextState.push(layer)
    }

    if (this.state.visibleLayers.length !== nextState.length)
      this.setState({
        visibleLayers: nextState
      })
  }

  closeAllLayer() {
    this.setState({
      visibleLayers: []
    })
  }

  validateSchedule(schedule) {
    this.setState({
      schedule
    })

    this.showLayer('schedule', false)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
        />
        <View style={styles.header}>
          <HorizontalCenter style={{ marginLeft: 20 }}>
            <Burger style={ styles.burger }/>
          </HorizontalCenter>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <HorizontalCenter style={{ marginLeft: 10 }}>
              <Image source={require('./assets/logo.png')} style={{ width: 125, height:25 }} resizeMethod="scale" />
            </HorizontalCenter>
          </View>{
          this.state.visibleLayers.length ? (
            <HorizontalCenter style={{ right: 20 }}>
              <Touchable onPress={ this.closeAllLayer }>
                  <Icon name="close" size={35} color={ BLUE } />
              </Touchable>
            </HorizontalCenter>
            ) :
            null
        }</View>
        <View style={styles.body}>
          <LayerDeck visibleLayers={this.state.visibleLayers}>
            <Layer name="roaster">
              <View style={styles.topbar}>
                <TopBarButton style={{ flex: 1 }} icon="map-marker" text="Adresse"></TopBarButton>
                <TopBarButton onPress={ this.showLayer.bind(this, 'schedule', true) } style={{ flex: 1 }} icon="clock-o" text={ this.state.schedule.day ? this.state.schedule.day + ' ' + this.state.schedule.time : 'Votre horaire' }></TopBarButton>
              </View>
              <View style={styles.roaster}>
                <DishList />
              </View>
            </Layer>
            <Layer name="schedule" from="top">
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Schedule title="Quand souhaitez vous être livré(e)?" onValidate={ this.validateSchedule } />
              </View>
            </Layer>
          </LayerDeck>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    alignSelf: 'stretch',
    paddingTop: 11,
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  body: {
    flex: 93
  },
  topbar: {
    alignSelf: 'stretch',
    flex: 7,
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-around',    
  },
  roaster: {
    flex: 86,
  },
  burger: {
    marginTop: 5
  }
});
