import React from 'react'
import { Text } from 'react-native-web'
import ProductCard from './Shared/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

const Sale = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",padding:"5px" }} >
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </View>
    )
}

export default Sale