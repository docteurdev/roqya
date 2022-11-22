import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, FallPage, FallPage2, Home, Login, Register, RegisterSuite } from '../sreens'
import DrawerNav from './DrawerNav'

export type RootStackParamList = {
  Login: any;
  Register: any;
  RegisterSuite: any;
  Home: any ;
  Detail:{rdv: any};
  Fallpage: any;
  Fallpage2: any;
};
const Stack= createNativeStackNavigator<RootStackParamList>()

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Fallpage'
       screenOptions={{
        headerShown: false
       }}
      >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='RegisterSuite' component={RegisterSuite}/>
        <Stack.Screen name='Home' component={DrawerNav}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='Fallpage' component={FallPage}/>
        <Stack.Screen name='Fallpage2' component={FallPage2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavStack

const styles = StyleSheet.create({})