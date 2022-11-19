import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Form, TextLg, TextMedium } from '../common/componentStyled'
import { colors } from '../common/colors'

const Actions = () => {
  return (
    <Form>
      <TextLg style={{color: colors.primary, }}>Nos actions</TextLg>
      <TextLg style={{color: colors.primary, }}>*
       <TextMedium>Plus de 2 000 000 personnes soignées depuis nos débuts;</TextMedium>
      </TextLg>

      <TextLg style={{color: colors.primary, }}>*
       <TextMedium>Plusieurs centres de fonctionnement en permanence (Afrique,Europe, Asie, Amérique,…..);</TextMedium>
      </TextLg>

      <TextLg style={{color: colors.primary, }}>*
       <TextMedium>Des milliers d’émissions radio-télé avec le captage en direct, une
technique de la roqya qui consiste à capter les djinns partout ou
ils se trouvent.</TextMedium>
      </TextLg>
    </Form>
  )
}

export default Actions

const styles = StyleSheet.create({})