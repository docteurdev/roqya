import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Action, Cheick, Detail, Home, Localisation, Login, Rappels, Rencontre } from '../sreens'
import KeyboardAvoidingComponent from '../components/View'
import FormContainer from '../components/container/FormContainer'
import { CustomDrawer } from '../components'

export  type RootDrawerParamsList= {
  Homepage: undefined,
  Rappels: undefined,
  Actions: undefined,
  Rencontre: undefined,
  Cheick: undefined,
  Location: undefined,
  Detail: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParamsList>()

export const DrawerNav = () => {
  return (
    
    <Drawer.Navigator
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawer {...props}/>}
    screenOptions={{
        headerShown: false
       }}
    >
      <Drawer.Screen name='Homepage' component={Home}/>
      <Drawer.Screen name='Rappels' component={Rappels}/>
      <Drawer.Screen name='Actions' component={Action}/>
      <Drawer.Screen name='Rencontre' component={Rencontre}/>
      <Drawer.Screen name='Cheick' component={Cheick}/>
      <Drawer.Screen name='Location' component={Localisation}/>
      <Drawer.Screen name='Detail' component={Detail}/>
      
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})