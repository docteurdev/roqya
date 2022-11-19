import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Form } from '../common/componentStyled'
import { logo } from '../images'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring,  } from 'react-native-reanimated'

const Loading = () => {
    const logoscale= useSharedValue(1)
    const logoAnim= useAnimatedStyle(() => {
      return{
          transform:[{scale: logoscale.value}]

      }  
    })

    useEffect(() =>{
     logoscale.value= withRepeat(withSpring(1.05), -1, true)
    }, [])

  return (
    <Form style={{alignItems: "center"}}>
      <Animated.Image
       source={logo}
       style={[{width: 170, height: 170},logoAnim]}
      />
    </Form>
  )
}

export default Loading

const styles = StyleSheet.create({})