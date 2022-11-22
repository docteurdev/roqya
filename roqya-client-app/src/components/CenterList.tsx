import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { colors } from '../common/colors'
import CustomInput from './CustomInput'
import { FlexWrapper, RoundedMd, TextLg, TextMedium } from '../common/componentStyled'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { selectCentre } from '../redux/centres'


const {width, height}= Dimensions.get('window');

type Props={
    isModal: Dispatch<SetStateAction<boolean>>,
    centres:any
}

const CenterList: React.FC<Props> = ({isModal, centres}) => {
  
  const disptch= useDispatch();

  const selectYourCentre= (centre: any) =>{
    disptch(selectCentre(centre))
  }
  
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
           <TextLg  style={{color: colors.primary, marginLeft: 14}}> Liste de Centres </TextLg>        

      </FlexWrapper>

      <ScrollView>
        {centres? centres.map((centre: any, id: any) =>(
                <TouchableHighlight
                key={id}
                style={{padding: 12, borderRadius: 4}}
                underlayColor={colors.secondary}
                onPress={() => {
                  selectYourCentre(centre)
                  isModal(false)
                }}
                >
                
                <FlexWrapper  style={{width: "100%"}}>
                    <TextMedium> {centre.nom} </TextMedium>
                    <FontAwesome name="stethoscope" size={24} color={colors.textDanger} />
                </FlexWrapper>
                </TouchableHighlight>
        
        )): null}
      </ScrollView>
      </View>
    </View>
  )
}

export default CenterList

const styles = StyleSheet.create({})