import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { HorizontalCenter, Burger, TopBarButton, LayerDeck, Layer } from './modules/UI'
import { DishList } from './modules/Dishes'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visibleLayers: []
    }

    this.showLayer = this.showLayer.bind(this)
  }

  showLayer(layer, show = true) {
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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
        />
        <LayerDeck visibleLayers={this.state.visibleLayers}>
          <Layer name="roaster">
            <View style={styles.header}>
              <HorizontalCenter style={{ marginLeft: 20 }}>
                <Burger style={ styles.burger }/>
              </HorizontalCenter>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <HorizontalCenter style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/logo.png')} style={{ width: 125, height:25 }} resizeMethod="scale" />
                </HorizontalCenter>
              </View>
            </View>
            <View style={styles.topbar}>
              <TopBarButton style={{ flex: 1 }} icon="map-marker" text="Adresse"></TopBarButton>
              <TopBarButton onPress={ this.showLayer.bind(this, 'schedule', true) } style={{ flex: 1 }} icon="clock-o" text="Votre horaire"></TopBarButton>
            </View>
            <View style={styles.roaster}>
              <DishList />
            </View>
          </Layer>
          <Layer name="schedule" from="top">
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Text>horaire</Text>
            </View>
          </Layer>
        </LayerDeck>
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
  topbar: {
    alignSelf: 'stretch',    
    flex: 7,
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',    
  },
  roaster: {
    flex: 86,
  },
  burger: {
    marginTop: 5
  }
});
