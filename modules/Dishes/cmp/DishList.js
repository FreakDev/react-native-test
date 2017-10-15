import React from 'react'
import { ActivityIndicator } from 'react-native'

import { FlatList } from 'react-native'

import { BLUE } from '../../../modules/UI/colors'
import DishCard from './DishCard'

export default class DishList extends React.Component {
    render() {
        const loading = false
        if (loading) 
            return <ActivityIndicator style={{ paddingTop: 100 }} color={ BLUE } size={40} />
        else 
            return (
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={[{
                    key:1,
                    photo: require('../../../assets/2598-brunch-steak-and-eggs.jpg'),
                    name:'BRUNCH "STEAK N EGGS"', 
                    price: '16.9'
                },{
                    key:2, 
                    photo: require('../../../assets/2598-brunch-steak-and-eggs.jpg'),
                    name:'BRUNCH "STEAK N EGGS"', 
                    price: '16.9'
                },{
                    key:3, 
                    photo: require('../../../assets/2598-brunch-steak-and-eggs.jpg'),
                    name:'BRUNCH "STEAK N EGGS"', 
                    price: '16.9'
                }]}
                renderItem={({item}) => (
                    <DishCard dish={item} />
                )}
            />)
    }
}