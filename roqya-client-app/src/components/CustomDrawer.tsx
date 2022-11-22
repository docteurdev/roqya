import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { ReactNode } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Divider, FlexWrapper, RoundedMd, TextLg, TextMedium, TextRegular } from '../common/componentStyled'
import { cheickh, logo, profile } from '../images'
import { colors } from '../common/colors'
import { Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { height } from '@mui/system'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamsList } from '../routes/DrawerNav'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useState } from 'react'

type Props = NativeStackScreenProps<RootDrawerParamsList>


type TypePatient= any
const CustomDrawer: React.FC<Props> = ({ navigation, ...props }) => {
   
     const [patient, setPatient]= useState<TypePatient>();
    // const patient = useSelector((state: any) => state.consultations.consultationP)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('patient')

          if(jsonValue!= null){
            JSON.parse(jsonValue)
            return setPatient(jsonValue)
          }
        //   jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }

      const removePatient = async () => {
        try {
          await AsyncStorage.removeItem('@MyApp_key')
          navigation.navigate('Login')
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }

      useEffect(() => {
         getData()
      }, [])

    //   console.log("patient---------------");
      
    //   const pat= patient
    //   if(patient){
    //     JSON.parse(pat)
        
    //   }
      
    return (
        <DrawerContentScrollView {...props}
        >
            <View
                style={{ paddingHorizontal: 8 }}
                >
                { patient?
               <>
                <RoundedMd
                    style={{ borderWidth: 1, overflow: 'hidden', width: 60, height: 60 }}
                >
                    <Image
                        source={profile}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                </RoundedMd>
                <TextMedium style={{ color: colors.textColor, marginVertical: 7 }}> {JSON.parse(patient).nom} {JSON.parse(patient).prenom} </TextMedium>
                <FlexWrapper style={{marginVertical: 4}}>
                    <Feather name="phone-call" size={20} color={colors.primary} />
                    <TextRegular style={{marginLeft: 8}}> {JSON.parse(patient).contact} </TextRegular>

                </FlexWrapper>

                <FlexWrapper style={{marginVertical: 4}}>
                    <MaterialIcons name="family-restroom" size={20} color={colors.primary} />
                <TextRegular style={{marginLeft: 8}}>{JSON.parse(patient).s_matrimoniale} </TextRegular>

                </FlexWrapper>
                <TextRegular>Nombre total de Rendez-vous <TextLg style={{ color: colors.textColor, fontSize: 15 }}> 10 </TextLg></TextRegular>

                <FlexWrapper style={{marginVertical: 4}}>
                    <MaterialIcons name="work-off" size={20} color={colors.primary} />
                    <TextRegular style={{marginLeft: 8}}>{JSON.parse(patient).profession} </TextRegular>

                </FlexWrapper>

                <FlexWrapper style={{marginVertical: 4}}>
                    <FontAwesome5 name="mosque" size={17} color={colors.primary} />
                <TextRegular style={{marginLeft: 8}}>{JSON.parse(patient).religion} </TextRegular>

                </FlexWrapper>
                <FlexWrapper style={{marginVertical: 4}}>
                <FontAwesome name="intersex" size={20} color={colors.primary} />
                <TextRegular style={{marginLeft: 8}}>{JSON.parse(patient).sexe} </TextRegular>

                </FlexWrapper>

                <Divider />
                </>: null}
                <ScrollView>


                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}
                        onPress={() => navigation.navigate('Rappels')}
                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 4, borderRadius: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><Entypo name="open-book" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 10, }} >Rappels</TextRegular>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => navigation.navigate('Actions')}
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><FontAwesome5 name="people-carry" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 10, }} > Nos Actions</TextRegular>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Rencontre')}
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><Ionicons name="ios-people" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 10, }} >Rencontre des savants et outorités de l'Islam</TextRegular>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => navigation.navigate('Cheick')}
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <RoundedMd
                                style={{ overflow: 'hidden', }}
                            >
                                <Image
                                    source={cheickh}
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    resizeMode="cover"
                                />
                            </RoundedMd>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 10, }} >Qui est le Cheickh Ben Halima Abdulraouf</TextRegular>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        onPress={removePatient}
                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><SimpleLineIcons name="logout" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 20, fontSize: 15 }} >Se déconnecter</TextRegular>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})