import { Alert, BackHandler, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ConsulTileBx, FlexWrapper, Form, IconWrapper, TextLg, TextMedium, TextXl } from '../common/componentStyled'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../common/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routes/NavStack'
import { RoundedBtn } from '../components'
import { useBackHandler } from '../hooks/useBackHandler'

type Props = NativeStackScreenProps<RootStackParamList, "Detail">

const { width, height } = Dimensions.get('window');

const Detail = ({ navigation, route }: Props) => {

  const consult = route.params.rdv;
  //  console.log("route.params--------------------");
  //  console.log(consult.id);
 console.log(route.name);
 


  return (
    <Form
      style={{ justifyContent: "flex-start", }}
    >
      <FlexWrapper style={{ width: "100%", justifyContent: "space-between", marginVertical: height * .04, }}>
        <RoundedBtn
          style={{ backgroundColor: colors.primary }}
          icon="chevron-back"
          onPress={() => navigation.goBack()}
        />
        {/* <Entypo name="chevron-small-left" size={24} color={colors.primary} />
        </RoundedBtn> */}
        <TextLg style={{ color: colors.textColor }} >Consultation <TextLg style={{ color: colors.primary }}> {consult.id} </TextLg></TextLg>
      </FlexWrapper>
      <TextMedium>Assistante</TextMedium>
      <TextXl> {consult.secretaire} </TextXl>

      <TextMedium>Raqki</TextMedium>
      <TextXl>{consult.rakis}</TextXl>

      {/* consultation medical */}
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 25
        }}
      >
        <ConsulTileBx style={{ marginBottom: 12, paddingLeft: 6, alignItems: "flex-start", width: 100}}>
          <TextMedium style={{ marginTop: -3, color: colors.primary }}>Symptômes</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>

          {consult.symptome.map((symptome: any, id: any) =>(
                <ConsulTileBx 
                 key={id}
                style={{borderRadius: 0,
                     borderWidth: 2,
                     borderColor: colors.textDanger,
                     backgroundColor: colors.white,
                     margin: 4
                     }}>
                  <TextMedium style={{marginTop: -3}}> {symptome} </TextMedium>
                </ConsulTileBx>
             ))}

        </FlexWrapper>

        {/* ventous */}

        <ConsulTileBx style={{ marginBottom: 12, marginTop: 10, paddingLeft: 6, alignItems: "flex-start",width: 100 }}>
          <TextMedium style={{ marginTop: -3, color: colors.primary }}>Ventouses</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>
          {consult.ventouse.map((remede: any, id: any) => (
            <ConsulTileBx
            key={id}
              style={{
                borderRadius: 0,
                borderWidth: 2,
                borderColor: colors.warning,
                backgroundColor: colors.white,
                margin: 4
              }}>
              <TextMedium style={{ marginTop: -3 }}> {remede} </TextMedium>
            </ConsulTileBx>
          ))}
          </FlexWrapper>

        {/* Remèdes */}

        <ConsulTileBx style={{ marginBottom: 12, marginTop: 10, paddingLeft: 6, alignItems: "flex-start",width: 100 }}>
          <TextMedium style={{ marginTop: -3, color: colors.primary }}>Remèdes</TextMedium>
        </ConsulTileBx>

        <FlexWrapper style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>

          {consult.remede.map((remede: any, id: any) => (
            <ConsulTileBx
               key={id}
              style={{
                borderRadius: 0,
                borderWidth: 2,
                borderColor: colors.secondary,
                backgroundColor: colors.white,
                margin: 4,
              }}>
              <TextMedium style={{ marginTop: -3 }}> {remede} </TextMedium>
            </ConsulTileBx>
          ))}
          </FlexWrapper>
      </ScrollView>

    </Form>
  )
}

export default Detail

const styles = StyleSheet.create({})