import React from 'react'
import { Button, Dimensions } from 'react-native'
import { Text, View } from 'react-native'
import { Image } from 'react-native'

const ProductCard = () => {
    return (
        <View style={{ display: "flex", flexDirection: "column", flex: "1", minWidth: (Dimensions.get("window").width / 2) - 40 , margin:"auto",marginRight:"3px",marginLeft:"3px",marginBottom:"5px", overflow: "hidden", backgroundColor: "white" }}>
            <Image source={{uri:"https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full.jpeg"}} style={{ height: "70px" }} />
            <Text style={{fontWeight:"600",fontSize:"16px"}}>
                Amazing Watch
            </Text>
            <Text style={{fontWeight:"600",fontSize:"16px"}}>
                Free Delivery
            </Text>
        </View>
    )
}

export default ProductCard