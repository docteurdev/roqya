import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../sreens'
import DrawerNav from './DrawerNav'

const Stack= createNativeStackNavigator()

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
       }}
      >
        <Stack.Screen name='home' component={DrawerNav}/>
        <Stack.Screen name='p' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavStack

const styles = StyleSheet.create({})