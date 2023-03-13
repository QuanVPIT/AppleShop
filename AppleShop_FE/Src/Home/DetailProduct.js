import { View, Text } from 'react-native'
import React from 'react'

const DetailProduct = ({navigation,route}) => {
    const {id} = route.params;
    console.log("ID PRODUCT:",id);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default DetailProduct