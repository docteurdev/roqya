import { Dimensions, Image, StyleSheet, Keyboard, Alert, View, TextInput, TouchableWithoutFeedback, ScrollView, BackHandler } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

import { ConsultationStyled, FlexWrapper, Form, TextLg, TextMedium, TextRegular, TextXl } from '../common/componentStyled'
import { colors } from '../common/colors'
import {logo} from '../images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamsList } from '../routes/DrawerNav';
import { RootStackParamList } from '../routes/NavStack';
import { Loading } from '../components';
import { useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';


const {width, height}= Dimensions.get('window');

type Props = NativeStackScreenProps<RootDrawerParamsList, "Homepage">
type PropsConslu = NativeStackScreenProps<RootStackParamList, "Detail">

const Consultation= ({navigation, rdv}: PropsConslu) =>{
 
  // console.log(rdv);
  

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
     <TextRegular style={{color: colors.textColor}}> {rdv.date_consultation} </TextRegular>
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

const Home = ({navigation, route}: Props) => {
  
// console.log(route.name);


  const consultations = useSelector((state: any) => state.consultations.consultationP)
 const [load, setLoad]= useState(false);
 const [patient, setPatient]= useState();
 const [rdvs, setrdvs]= useState(patient?JSON.parse(patient).rdvs: consultations.rdvs);
 const [inputVal, setinputVal]= useState('');

  // console.log(consultations.rdvs.length);

//   useEffect(() => {
//     const backAction = () => {
//         Alert.alert(" 👋🏽 ", "Voulez-vous quitter Digital Business Card?", [
//             {
//                 text: "NON",
//                 onPress: () => null,
//                 style: "cancel"
//             },
//             { text: "OUI", onPress: () => BackHandler.exitApp() }
//         ]);
//         return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//         "hardwareBackPress",
//         backAction
//     );

//     return () => backHandler.remove();
// }, []);

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

useEffect(() =>{
  getData()
}, [])

// if(patient){
//   console.log(JSON.parse(patient).rdvs);
  
// }


const rdvFiltered = (text: string) =>{
  setinputVal(text)
  if(!text.length){
    setrdvs(consultations.rdvs)

  } else{

  //  setinputVal(text)
   let newArr=  consultations.rdvs.filter((rdv: any) => rdv.date_consultation.toLowerCase().includes(text.toLowerCase()))
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
      <FlexWrapper style={{width: "100%",marginTop:12 }}>
      <TextLg style={{color:colors.primary, marginLeft:12}}>Mes consultations  </TextLg>
      <FlexWrapper
       style={{
        minWidth: 50,
        height: 30,
        backgroundColor: colors.primary,
        justifyContent: "center",
        marginRight: width*0.04,
        borderRadius: 5
       }}>
      <TextRegular style={{ color: colors.white}}> {rdvs?.length}</TextRegular>

      </FlexWrapper>
      </FlexWrapper>
      <ScrollView 
      style={{width: width, paddingHorizontal: 12, paddingBottom: 30}}>
       {rdvs?.map((rdv:any, index:any) => <Consultation key={index} rdv={rdv} navigation={navigation}/>)}
      
    </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})