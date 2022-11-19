import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { ReactNode } from 'react'
import { ContainerType } from '../../common/types';
import { Form } from '../../common/componentStyled';
import { colors } from '../../common/colors';

interface FormContainerType{
  children: ReactNode
}

const FormContainer: React.FC<FormContainerType> = (props) => {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex: 1, }}
    >
      <TouchableWithoutFeedback style={{width: '100%',}} onPress={ Keyboard.dismiss} >
        <Form style={{width: '100%', }} >
        
        {props.children}
        </Form>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default FormContainer

const styles = StyleSheet.create({})