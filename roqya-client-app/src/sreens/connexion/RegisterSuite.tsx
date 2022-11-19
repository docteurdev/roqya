import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import FormContainer from '../../components/container/FormContainer'
import { FlexWrapper, InputBx, RoundedMd, TextLg, TextMedium, TextRegular, TextXl } from '../../common/componentStyled'
import { CustomButton, CustomInput, RoundedBtn } from '../../components';
import { colors } from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/NavStack';
// import logo from "../../images/roqya.jpg";
const {height, width}= Dimensions.get('window');

type Props=  NativeStackScreenProps<RootStackParamList, "RegisterSuite">

const RegisterSuite = ({navigation}: Props) => {
  return (
      <FormContainer >
      <View style={{flex: 1}}>
      
      <FlexWrapper style={{justifyContent: "center", marginTop: height*.05}}>
      <RoundedBtn
      icon="chevron-back"
       style={{backgroundColor: colors.primary, alignSelf: "flex-start", width: 60, height: 60}}
          onPress={() => navigation.goBack()}
        />
      </FlexWrapper>
      <TextLg style={{color: colors.primary,}}>Terminez la création de votre compte</TextLg>
      
       <CustomInput
      label="Nom d'utilisateur" 
       placeholder="Entrez votre nom d'utilisateur"
      />
      <CustomInput 
       label="Mot de passe"
       placeholder="* * * * * * * * * "
       icon='eye'
       secureTextEntry={true}
      /> 

      <TextMedium style={{justifyContent: "center", marginVertical: height*0.02,}} >Sexe </TextMedium>
      <FlexWrapper style={{width: width-20, marginVertical: height*0.01, justifyContent:"flex-start",}} >
        <FlexWrapper style={{marginRight: 10}}>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Masculin </TextMedium>
        </FlexWrapper>
        <FlexWrapper>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Féminin </TextMedium>
        </FlexWrapper>
      </FlexWrapper>
      
      <TextMedium style={{justifyContent: "center", marginVertical: height*0.02,}} > Situation matrimoniale </TextMedium>

      <FlexWrapper style={{width: width-20, marginVertical: height*0.01,}} >
        <FlexWrapper>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Célibataire </TextMedium>
        </FlexWrapper>
        <FlexWrapper>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Marié </TextMedium>
        </FlexWrapper>
        <FlexWrapper>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Divorcé </TextMedium>
        </FlexWrapper>
        <FlexWrapper>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Veuf </TextMedium>
        </FlexWrapper>
      </FlexWrapper>
      {/* <View
       style={{flexGrow: 1, marginTop: 15 }}
      >
      <TextLg style={{color: colors.primary,}}>Vérifier vos informations</TextLg>

        <FlexWrapper style={{marginTop: 15}}>
         <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Nom:  <TextMedium>Aman akoua</TextMedium> </TextMedium>
         <TextMedium style={{justifyContent: "center", color: colors.textRegular, marginLeft: 5}} >Prenom:  <TextMedium>Kanan</TextMedium> </TextMedium>
         
        </FlexWrapper>

        <FlexWrapper style={{marginTop: 15}} >
         <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Contact:  <TextMedium>Aman akoua</TextMedium> </TextMedium>
         <TextMedium style={{justifyContent: "center", color: colors.textRegular, marginLeft: 5,}} >Profession:  <TextMedium>Kanan</TextMedium> </TextMedium>
         
        </FlexWrapper>
        <FlexWrapper style={{marginTop: 15}} >
         <TextMedium style={{justifyContent: "center", color: colors.textRegular}} >Situation matrimoniale:  <TextMedium>Aman akoua</TextMedium> </TextMedium>
         <TextMedium style={{justifyContent: "center", color: colors.textRegular, marginLeft: 5,}} >Sexe:  <TextMedium>Kanan</TextMedium> </TextMedium>
         
        </FlexWrapper>
        
      </View> */}
       <View
        style={{marginTop: 15}}
       >

        <CustomButton
         title="Valider"
         onPress={() => alert("c'est valider")}
        />
       </View>
      </View>
    </FormContainer>
  )
}

export default RegisterSuite

const styles = StyleSheet.create({})