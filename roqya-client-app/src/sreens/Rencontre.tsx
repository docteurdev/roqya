import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Form, TextLg, TextMedium } from '../common/componentStyled'
import { colors } from '../common/colors'

const Rencontre = () => {
  return (
    <Form>
            <TextLg style={{color: colors.primary, }}>Rencontre avec les Savants et Autorités de l'Islam </TextLg>
       <TextMedium>
       Beaucoup approuvent nos méthodes, viennent se soigner chez nous,
font notre publicité et nous envoient des patients.
</TextMedium>

    </Form>
  )
}

export default Rencontre

const styles = StyleSheet.create({})