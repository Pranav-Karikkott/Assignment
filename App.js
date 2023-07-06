import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'



import Login from './Login'
import Register from './Register'

const stack = createStackNavigator()
const Mystack = () => {
  return (
    <stack.Navigator>
      <stack.Screen 
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      >
      </stack.Screen>
      <stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      ></stack.Screen>
    </stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Mystack></Mystack>
    </NavigationContainer>
  
  )
}


export default App
