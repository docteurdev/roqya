import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ConsulTileBx, FlexWrapper, Form, IconWrapper, TextLg, TextMedium, TextXl } from '../common/componentStyled'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../common/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routes/NavStack'
import { RoundedBtn } from '../components'

type Props= NativeStackScreenProps<RootStackParamList, "Detail">

const {width, height}= Dimensions.get('window');

const Detail = ({navigation}: Props) => {


  return (
    <Form
     style={{justifyContent: "flex-start",}}
    >
      <FlexWrapper style={{width: "100%", justifyContent:"space-between", marginVertical:height* .04, }}>
        <RoundedBtn
         style={{backgroundColor: colors.primary}}
         icon ="chevron-back"
         onPress={() =>navigation.goBack()}
         />
            {/* <Entypo name="chevron-small-left" size={24} color={colors.primary} />
        </RoundedBtn> */}
        <TextLg style={{color: colors.textColor}} >Consultation <TextLg style={{color: colors.primary}}>5</TextLg></TextLg>
      </FlexWrapper>
      <TextMedium>Assistante</TextMedium>
      <TextXl>Fatima bintou</TextXl>

      <TextMedium>Raqki</TextMedium>
      <TextXl>Youssouf Ali</TextXl>

      {/* consultation medical */}
      <ScrollView
       contentContainerStyle={{
        paddingVertical: 25
       }}
      >
        <ConsulTileBx style={{marginBottom: 12,}}>
            <TextMedium style={{marginTop: -3, color: colors.primary}}>Symptômes</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{justifyContent: "flex-start", flexWrap: "wrap"}}>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Mangé</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Mangé</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Mangé</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Mangé</TextMedium>
            </ConsulTileBx>
        </FlexWrapper>

        {/* ventous */}

        <ConsulTileBx style={{marginBottom: 12, marginTop: 10}}>
            <TextMedium style={{marginTop: -3, color: colors.primary}}>Ventouses</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{justifyContent: "flex-start", flexWrap: "wrap"}}>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Front</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Mangé</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Nuque</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Dos</TextMedium>
            </ConsulTileBx>
        </FlexWrapper>

        {/* Rmèdes */}

        <ConsulTileBx style={{marginBottom: 12, marginTop: 10}}>
            <TextMedium style={{marginTop: -3, color: colors.primary}}>Remèdes</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{justifyContent: "flex-start", flexWrap: "wrap"}}>
            
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Miel</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Pommade</TextMedium>
            </ConsulTileBx>
            <ConsulTileBx 
            style={{borderRadius: 0,
                 borderWidth: 2,
                 borderColor: colors.textDanger,
                 backgroundColor: colors.white,
                 margin: 4
                 }}>
              <TextMedium style={{marginTop: -3}}>Eau coranisée</TextMedium>
            </ConsulTileBx>
        </FlexWrapper>
      </ScrollView>
      
    </Form>
  )
}

export default Detail

const styles = StyleSheet.create({})