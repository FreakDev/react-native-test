import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import { HorizontalCenter, Burger, TopBarButton, LayerDeck, Layer } from './modules/UI'
import { DishList } from './modules/Dishes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
        />
        <LayerDeck>
          <Layer>
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
              <TopBarButton style={{ flex: 1 }} icon="clock-o" text="Votre horaire"></TopBarButton>
            </View>
            <View style={styles.roaster}>
              <DishList />
            </View>
          </Layer>
          <Layer>
            {/* <Text>horaire</Text> */}
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
