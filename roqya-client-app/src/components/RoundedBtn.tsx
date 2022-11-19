import { GestureResponderEvent, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ComponentProps } from 'react'
import { RoundedMd } from '../common/componentStyled'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../common/colors'

interface RoundedBtnType{
style: StyleProp<ViewStyle>;
icon: ComponentProps<typeof Ionicons>["name"];
 onPress: ((event: GestureResponderEvent) => void) | undefined
}
const RoundedBtn: React.FC <RoundedBtnType> = ({onPress,icon, ...props}) => {
  return (
    <RoundedMd {...props} onPress={onPress} >
      <Ionicons name={icon} size={24} color={colors.white} />
    </RoundedMd>
  )
}

export default RoundedBtn

const styles = StyleSheet.create({})