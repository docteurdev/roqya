import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { ReactNode } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Divider, RoundedMd, TextLg, TextMedium, TextRegular } from '../common/componentStyled'
import { cheickh, logo, profile } from '../images'
import { colors } from '../common/colors'
import { Entypo, Feather, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
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
   
    // const [patient, setPatient]= useState<TypePatient>();
    const patient = useSelector((state: any) => state.consultations.consultationP)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('patient')
          jsonValue != null ? JSON.parse(jsonValue) : null;
        //   return setPatient(jsonValue)
        } catch(e) {
          // error reading value
        }
      }

      useEffect(() => {
        // getData()
      }, [])

      console.log("patient---------------");

      if(patient){
          console.log(patient);
        
      }
      
    return (
        <DrawerContentScrollView {...props}
        >
           { patient?
            <View
                style={{ paddingHorizontal: 8 }}
            >

                <RoundedMd
                    style={{ borderWidth: 1, overflow: 'hidden', width: 60, height: 60 }}
                >
                    <Image
                        source={profile}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                    />
                </RoundedMd>
                <TextMedium style={{ color: colors.textColor }}> {patient.nom} {patient.prenom} </TextMedium>
                <TextRegular><Feather name="phone-call" size={20} color={colors.primary} /> <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.contact} </TextLg></TextRegular>
                <TextRegular>Prochain rendez <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.contact} </TextLg></TextRegular>
                <TextRegular>Nombre total de Rendez-vous <TextLg style={{ color: colors.primary, fontSize: 15 }}> 10 </TextLg></TextRegular>
                <TextRegular>Situation matrimoniale <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.s_matrimoniale} </TextLg></TextRegular>

                <TextRegular>Profession <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.profession} </TextLg></TextRegular>
                <TextRegular>Religion <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.religion} </TextLg></TextRegular>
                <TextRegular>Sexe <TextLg style={{ color: colors.primary, fontSize: 15 }}> {patient.sexe} </TextLg></TextRegular>

                <Divider />

                <ScrollView>


                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}
                        onPress={() => navigation.navigate('Rappels')}
                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 4, borderRadius: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><Entypo name="open-book" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 20, fontSize: 15 }} >Rappels</TextRegular>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => navigation.navigate('Actions')}
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><FontAwesome5 name="people-carry" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 20, fontSize: 15 }} > Nos Actions</TextRegular>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Rencontre')}
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><Ionicons name="ios-people" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 20, fontSize: 15 }} >Rencontre des savants et outorités de l'Islam</TextRegular>
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

                            <TextRegular style={{ color: colors.textColor, marginLeft: 10, fontSize: 15 }} >Qui est le Cheickh Ben Halima Abdulraouf</TextRegular>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor={colors.inputborderColor}

                        onPress={() => navigation.navigate('Login')}
                        style={{ borderWidth: 0, paddingVertical: 13, paddingHorizontal: 3 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextMedium><SimpleLineIcons name="logout" size={24} color={colors.primary} /></TextMedium>

                            <TextRegular style={{ color: colors.textColor, marginLeft: 20, fontSize: 15 }} >Se déconnecter</TextRegular>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>: null}
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})