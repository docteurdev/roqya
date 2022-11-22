import { Dimensions, Image, StyleSheet, Keyboard, View, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

import { ConsultationStyled, FlexWrapper, Form, TextLg, TextMedium, TextRegular, TextXl } from '../common/componentStyled'
import { colors } from '../common/colors'
import {logo} from '../images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamsList } from '../routes/DrawerNav';
import { RootStackParamList } from '../routes/NavStack';
import { Loading } from '../components';
import { useSelector } from 'react-redux';


const {width, height}= Dimensions.get('window');

type Props = NativeStackScreenProps<RootDrawerParamsList, "Homepage">
type PropsConslu = NativeStackScreenProps<RootStackParamList, "Detail">

const Consultation= ({navigation, rdv}: PropsConslu) =>{
 
  

  return(
    <ConsultationStyled
    onPress={() => navigation.navigate("Detail", {rdv: rdv})}
    style={{justifyContent: "space-between",  marginVertical: 7}}
    >
     <View
      style={{flexDirection: "row", }}
     >
     <View
     style={{width: 40, height: 40, 
      borderWidth: 2, 
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 100,
      padding: 10,
      borderColor: colors.primary,
      marginRight: 6
    }}
     >
      <FontAwesome name="hospital-o" size={24} color={colors.primary} />
     </View>

     <View>
     <TextMedium style={{color: colors.textColor}}>rendez-vous du</TextMedium>
     <TextRegular style={{color: colors.textColor}}> {rdv.date} </TextRegular>
     </View>
     </View>

     <View
      style={{

      }}
     >
     <Entypo name="chevron-small-right" size={30} color={colors.primary} />
     </View>
    </ConsultationStyled>
  )
}

const Home = ({navigation}: Props) => {
  const rdv=[
    {date: "32/03/3021"},
    {date: "03/04/2022"},
    {date: "01/01/2022"},
    {date: "17/03/2022"},
    {date: "12/03/2021"},
  ]
  


 const [load, setLoad]= useState(false);
 const [rdvs, setrdvs]= useState(rdv);
 const [inputVal, setinputVal]= useState('');

 const consultations = useSelector((state: any) => state.consultations.consultationP)
//  console.log(consultations.rdvs);
 
  
const rdvFiltered = (text: string) =>{
  setinputVal(text)
  if(!text.length){
    setrdvs(rdv)

  } else{

  //  setinputVal(text)
   let newArr=  rdvs.filter(rdv => rdv.date.toLowerCase().includes(text.toLowerCase()))
   return setrdvs(newArr);
   
  }
}




 if(load){
  return <Loading/>
 }

  return (
    <View
    style={{width: width, flex: 1, backgroundColor:colors.white,}}
    >
      {/* <> */}
      <View
       style={{width: width,
         height: 150,
         backgroundColor: colors.inputborderColor,
         borderBottomLeftRadius: 35,
         borderBottomRightRadius: 35,
        padding: 10
      }}
      > 
        <FlexWrapper style={{alignItems: "center", marginTop: width*0.05, }}>
        <Ionicons
         onPress={() =>navigation.openDrawer()}
        name="ios-menu-outline" size={30} color="black" />
        </FlexWrapper>

       <View
         style={{
          marginTop: 20,
          height: 45,
          borderWidth: 1,
          borderColor: colors.secondary,
          backgroundColor: colors.white,
          borderRadius: 6
         }}
        >
       <Ionicons name="ios-search-outline" size={24} color={colors.textRegular} style={{position: "absolute", right: 5, top: 8}} />
        <TextInput
         value={inputVal}
         onChangeText={(text) => rdvFiltered(text)}
         placeholder='recherchez un Rdv'
         style={{
          position: 'absolute',
          height: "100%",
          width: "100%",
          padding: 4,
         }}
        />
       </View>
      </View>
      <TextLg style={{color:colors.primary, marginTop:12, marginLeft:12}}>Mes consultations</TextLg>
      <ScrollView 
      style={{width: width, paddingHorizontal: 12, paddingBottom: 30}}>
       {consultations?.rdvs.map((rdv:any, index:any) => <Consultation key={index} rdv={rdv} navigation={navigation}/>)}
      
    </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})