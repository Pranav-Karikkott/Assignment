import { View, Text } from 'react-native'
import React from 'react'

fetch(' https://api.oopacks.com/api/test/register')
  .then((response) => response.json())
  .then((json) => console.log(json));
const Test = () => {
  return (
    <View></View>
  )
}

export default Test