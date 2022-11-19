import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { ButtonLg, TextLg, TextMedium } from '../common/componentStyled';
import { sizes } from '../common/size';
import { colors } from '../common/colors';

interface ButtonType{
  title: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined
}
const CustomButton: React.FC <ButtonType> = ({title,onPress, ...props}) => {
  return (
    <ButtonLg onPress={onPress} style={{marginHorizontal: sizes.md}}>
      <TextMedium style={{marginTop: -3, color:colors.white}}> {title} </TextMedium>
    </ButtonLg>
  )
}

export default CustomButton

const styles = StyleSheet.create({})