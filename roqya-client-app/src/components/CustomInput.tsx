import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { IconWrapper, InputBx, InputFeild, TextMedium, TextRegular } from '../common/componentStyled'
import { InputProps } from '../common/types';
import { Dimensions } from 'react-native';
import { colors } from '../common/colors';
import { sizes } from '../common/size';

const {width, height}= Dimensions.get('window')
const CustomInput: React.FC <InputProps> = ({icon,label,secureTextEntry,error, errorDetails,...props}) => {
    
    const [secure, setSecure]= useState(secureTextEntry)
    const [backgroundColor, setbackgroundColor]= useState(colors.white)

    const customBlur= () =>{
        props?.onBlur
        setbackgroundColor(colors.white)
    }

    const customFocus= () =>{
        props.onFocus
        setbackgroundColor(colors.inputborderColor)
    }
    
  return (
    <View  >

      <TextMedium style={{marginVertical: 8}} >{label}</TextMedium>
      {!!errorDetails && <TextRegular style={{color: colors.textDanger,}}> {errorDetails} </TextRegular>}
      <InputBx style={{borderColor: error? colors.textDanger: colors.inputborderColor}}>
      <InputFeild
       onFocus={customFocus}
       onBlur={customBlur}
       {...props} 
       style={{backgroundColor: backgroundColor}}
       secureTextEntry={secure}
      />
      {icon? <IconWrapper>
        <>
        <Entypo name={!secure? icon: 'eye-with-line'} onPress={() => setSecure(!secure)} size={24} color={colors.primary} />
        </>
      </IconWrapper>: null}
    </InputBx>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})