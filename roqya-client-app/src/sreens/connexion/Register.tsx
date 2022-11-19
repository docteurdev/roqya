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

type Props=  NativeStackScreenProps<RootStackParamList, "Register">

const Register = ({navigation}: Props) => {
  return (
      <FormContainer >
      <View style={{flex: 1}}>

      
      <TextXl style={{marginTop: height*.05, marginBottom: 8}} >Salam Aleikoum  👋🏽</TextXl>
      <TextLg style={{color: colors.primary, }}>Créer votre compte</TextLg>
      <ScrollView style={{flex: 1, }}>
      <View  >
      </View>
      <CustomInput
      label="Nom " 
       placeholder="Entrez votre nom "
      />
      <CustomInput
       label="Prenom " 
       placeholder="Entrez votre prenom "
      />
      <CustomInput
      label="Contact " 
       placeholder="Entrez votre Contact "
      />
      <CustomInput
      label="Profession " 
       placeholder="Entrez votre Profession "
      />
      

        <RoundedBtn
        icon='md-chevron-forward'
         style={{backgroundColor: colors.primary, alignSelf: "flex-end", width: 60, height: 60, marginTop: 6}}
         onPress={() => navigation.navigate("RegisterSuite")}
        />
        <TextMedium style={{color: colors.textLightColor,textAlign: 'center', marginTop: 20}}> avez-vous déjà un compte?
         <TextMedium
         onPress={() => navigation.navigate("Login")}
         style={{color: colors.textDanger}}>  Connectez-vous </TextMedium> </TextMedium>

      </ScrollView>
      </View>
    </FormContainer>
  )
}

export default Register

const styles = StyleSheet.create({})