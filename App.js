import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HorizontalCenter, Burger, TopBarButton, LayerDeck, Layer, Touchable } from './modules/UI'
import { BLUE } from './modules/UI/colors'

import { Schedule, AddressPicker } from './modules/widget'
import { DishList, DishDetail } from './modules/Dishes'

const data = [{
  key:1,
  photo: require('./assets/1195-brunch-scandinave.jpg'),
  name:'SCANDINAVIAN BRUNCH', 
  price: '16.9',
  keywords: [],  
  description: `Un brunch tout droit venu du grand Nord, à déguster au chaud chez soi ? Foodchéri l'a fait pour vous ! 
  
On vous propose bien sûr un saumon gravlax, servi avec une crème au raifort (une plante herbacée très saine aux multiples vertus), une salade nordique de pommes de terre, concombre, céleri à l'aneth et des betteraves rôties. On n'oublie pas les oeufs, indispensables au brunch, avec une omelette de 3 oeufs à l'aneth. 
  
Pour le sucré, on vous a concocté un gâteau Danois à l'orange et son streussel à la noix de pécan (testé et approuvé à l'unanimité par toute la Foodchéribambelle), ainsi qu'un fromage blanc au pavot et sa compotée de cranberries. Un pot de beurre d'Echiré et un pot de confiture maison à la myrtille sont à tartiner généreusement sur une demi-baguette. Commandez à part votre jus préféré.`
},{
  key:2, 
  photo: require('./assets/1442-brunch-francais-3.jpg'),
  name:'BRUNCH FRANCAIS', 
  price: '16.9',
  keywords: [],
  description: `Le terroir sur l'oreiller On vous livre aujourd'hui le meilleur du terroir français dans un brunch campagnard. Au programme : une brouillade d'oeufs archi crémeuse parfumée à l'huile de truffe, une généreuse part de quiche extra moelleuse aux poireaux, aux épinards et au comté AOC, une poêlée campagnarde de pommes de terre et de champignons rôtis à la ciboulette et une belle tranche de jambon blanc fermier Label Rouge. 
  
Côté sucré, avant ou après le salé (c'est là deux écoles, deux philosophies qui s'affrontent, ici, on fait partie du mouvement Life is short, eat dessert first), nous vous avons concocté une brioche perdue maison (pas perdue pour tout le monde) ultra régressive, une compote à la pomme et à la framboise. 
  
Pour tartiner comme jamais, vous trouverez une demi-baguette de pain frais et un petit beurre d'Isigny. On pousse le vice jusqu'à faire notre propre confiture, elle est ici à la myrtille.`
},{
  key:3, 
  photo: require('./assets/2453-aubergine-vapeur-saigonaise.jpg'),
  name:'AUBERGINE A LA SAIGONNAISE & CORIANDRE FRAICHE', 
  price: '2.1',
  keywords: ['SANS LACTOSE', 'VEGGIE', 'HEALTHY', 'SE MANGE FROID'],
  description: `Une entrée fraîche et équilibrée en saveurs, avec des aubergines fondantes et une sauce à base de vinaigre de riz et de gingembre.`
},{
  key:4,
  photo: require('./assets/900-poulet-lait-citron-pdt-2.jpg'),
  name:'POULET AU LAIT & AU CITRON, POMMES DE TERRE ROTIES ET SALADE VERTE', 
  price: '7.95',
  keywords: ['A RECHAUFFER'],
  description: `Le traditionnel poulet aux pommes de terre revu par notre chef ! Le poulet, d'origine française, est cuit dans un mélange de lait, de sauge, de citron avec une pointe d'ail et de cannelle. Le résultat ? Une viande super fondante et une sauce, d'un aspect étonnant - la rencontre du citron et du lait - mais totalement délicieuse. Les pommes de terre sont rôties à l'huile d'olive AOP de Kalamata, et le tout est accompagné d'une salade de roquette.`
},{
  key:5,
  photo: require('./assets/219-curry-legumes-dhal-lentilles.jpg'),
  name:'CURRY DE LEGUMES, DAHL DE LENTILLES CORAIL        BIO ET RIZ BASMATI COCO', 
  price: '6.4',
  keywords: ['SANS GLUTEN', 'VEGAN', 'A RECHAUFFER'],
  description: `Carottes, patates douces, chou-fleur, et courgettes sont harmonieusement cuisinés dans un curry indien très savoureux. Notre chef accompagne ce plat d'un dahl de lentilles corail bio et d'un riz basmati parfumé à la noix de coco... Un régal !`
}]


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visibleLayers: [],
      basket: [],
      schedule: {},
      address: '',
      more: {}
    }

    this.showLayer = this.showLayer.bind(this)
    this.closeAllLayer = this.closeAllLayer.bind(this)

    this.validateSchedule = this.validateSchedule.bind(this)
    this.addToBasket = this.addToBasket.bind(this)
    this.onViewMore = this.onViewMore.bind(this)
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

  addToBasket() {

  }

  onViewMore(dish) {
    let dishData = data.find((dishData) => (dishData.name === dish))
    this.setState({
      more: dishData
    })
    this.showLayer('details', true)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
        />
        <View style={styles.header}>{
          this.state.visibleLayers.length === 0 ? (
            <HorizontalCenter style={{ marginLeft: 20 }}>
              <Burger style={ styles.burger }/>
            </HorizontalCenter>
          ): null
          }<View style={{ flex: 1, alignItems: 'center' }}>
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
          ) :null
        }</View>
        <View style={styles.body}>
          <LayerDeck visibleLayers={this.state.visibleLayers}>
            <Layer name="roaster">
              <View style={styles.topbar}>
                <TopBarButton onPress={ this.showLayer.bind(this, 'map', true) } style={{ flex: 1 }} icon="map-marker" text="Adresse"></TopBarButton>
                <TopBarButton onPress={ this.showLayer.bind(this, 'schedule', true) } style={{ flex: 1 }} icon="clock-o" text={ this.state.schedule.day ? this.state.schedule.day + ' ' + this.state.schedule.time : 'Votre horaire' }></TopBarButton>
              </View>
              <View style={styles.roaster}>
                <DishList 
                  data={data}
                  onSelect={this.addToBasket} 
                  onViewMore={this.onViewMore} 
                />
              </View>
            </Layer>
            <Layer name="details" from="bottom" >
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <DishDetail dish={ this.state.more } />
              </View>
            </Layer>
            <Layer name="map" from="top">
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <AddressPicker title="Où souhaitez-vous être livré(e)?" />
              </View>
            </Layer>            
            <Layer name="schedule" from="top">
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Schedule title="Quand souhaitez-vous être livré(e)?" onValidate={ this.validateSchedule } />
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
