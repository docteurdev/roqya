import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, FallPage, FallPage2, Home, Login, Register, RegisterSuite } from '../sreens'
import DrawerNav from './DrawerNav'
import { Loading } from '../components';
import { AppContext } from '../hooks/constextApi';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/connexions';

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

export  const NavStack = () => {
   const [islogged, setIslogged]= useState(false);
   const [patient, setPatient]= useState();
   
   const [isloadinf, setIsloading]= useState(true);
  //  const [userToken, setuserToken]= useState(null);
   
  const dispatch= useDispatch()
   const userToken= useSelector((state: any) => state.user.userToken) 

   console.log(userToken);
   

   const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('patient')

      if(jsonValue!= null){
        dispatch(login())
      }
    //   jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() =>{
    getData();
   
    setIslogged(true)
    setTimeout(() =>{
      setIslogged(false)
    }, 1000)
  }, [])

  const Authcontext= React.useMemo(() =>({
    signup:() =>{
      setIsloading(false);
      setuserToken("oui")
    },
    logout:() =>{
      setIsloading(true);
      setuserToken(null)

    }
  }))

  if(islogged){
    return(
      <Loading/>
    )
    
  }
  
  
  return (
    // <AppContext.Provider value={Authcontext}>
    <NavigationContainer>

      { userToken !== null?  <DrawerNav/>:
      <Stack.Navigator
      initialRouteName='Fallpage'
       screenOptions={{
        headerShown: false
       }}
      > 
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Detail' component={Detail}/>
          <Stack.Screen name='Fallpage' component={FallPage}/>
           <Stack.Screen name='Home' component={DrawerNav}/>
        
          

        
        {/* <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='RegisterSuite' component={RegisterSuite}/> */}
      </Stack.Navigator>
      
      }
    </NavigationContainer>
    // </AppContext.Provider>
  )
}

export default NavStack

const styles = StyleSheet.create({})