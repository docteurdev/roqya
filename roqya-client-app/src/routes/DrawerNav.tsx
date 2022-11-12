import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Localisation } from '../sreens'


const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown: false
       }}
    >
      <Drawer.Screen name='localisation' component={Localisation}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})