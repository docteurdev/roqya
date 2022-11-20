import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { colors } from '../common/colors'
import CustomInput from './CustomInput'
import { FlexWrapper, RoundedMd, TextLg, TextMedium } from '../common/componentStyled'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const {width, height}= Dimensions.get('window');

type Props={
    isModal: Dispatch<SetStateAction<boolean>>
}

const CenterList: React.FC<Props> = ({isModal}) => {
  return (
    <View
    style={{flex: 1, backgroundColor: colors.grayLiht, padding: 40 }}
     
    >
      <View
       style={{width: "100%", height:"100%", backgroundColor: colors.white, borderRadius:12, paddingHorizontal: 8}}
      > 
      <FlexWrapper style={{marginVertical: 15}} >
        <RoundedMd onPress={() => {
            isModal(false)
        }}>
        <Ionicons name="close" size={24} color={colors.textColor} /> 
        </RoundedMd>
        <TextLg style={{color: colors.primary, marginLeft: 14}}>Liste de Centres</TextLg>

      </FlexWrapper>
        <TouchableHighlight
        style={{padding: 12, borderRadius: 4}}
        underlayColor={colors.secondary}
        onPress={() => {
            isModal(false)
        }}
        >
        <FlexWrapper  style={{width: "100%"}}>
            <TextMedium> Centre abobo </TextMedium>
            <FontAwesome name="stethoscope" size={24} color={colors.textDanger} />
        </FlexWrapper>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default CenterList

const styles = StyleSheet.create({})