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
                data={this.props.data}
                renderItem={({item}) => (
                    <DishCard 
                        dish={item} 
                        onViewMore={(dish) => { this.props.onViewMore && this.props.onViewMore(dish) }} 
                        ononSelect={(dish) => { this.props.ononSelect && this.props.ononSelect(dish) }} 
                    />
                )}
            />)
    }
}