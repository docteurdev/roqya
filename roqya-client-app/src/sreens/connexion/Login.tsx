import { Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import FormContainer from '../../components/container/FormContainer'
import { BtnBx, FlexWrapper, InputBx, RoundedMd, TextLg, TextMedium, TextRegular, TextXl } from '../../common/componentStyled'
import { CenterList, CustomButton, CustomInput, Loading } from '../../components';
import { colors } from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/NavStack';

// ivalidation
import * as Yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


const {height, width}= Dimensions.get('window');

type Props= NativeStackScreenProps<RootStackParamList, "Login">


type ValidationType= {
  username: string,
  password: string
}

const Login = ({navigation}: Props) => {

const [showModal, setShowModal]= useState(false)
const [isLoading, setIsLoading]= useState(false)



const shema= Yup.object({
  username: Yup.string().required("Veuillez entrer votre nom d'utilisateur"),
  password: Yup.string().min(4, "mot de passe trop court").required("Veuillez entrer votre mot de passe")
}).required();

const {control, handleSubmit,reset, clearErrors, formState:{errors}}= useForm<ValidationType>({resolver: yupResolver(shema)})

const loginPatient= () =>{
  reset()
  console.log("patient is logged");
  
}
  
  return (
     <>
      {
        isLoading? <Loading/>:
      <FormContainer >
      
      <View style={{flex: 1}}>
        <Modal
         visible={showModal}
         transparent
        >
          <CenterList isModal={setShowModal}/>
        </Modal>
      <FlexWrapper style={{width: 200, marginVertical: width*0.1}} >
        {/* <RoundedMd>
            <Entypo name="chevron-small-left" size={24} color="black" />
        </RoundedMd> */}
        <TextLg style={{color: colors.primary}}>Connexion</TextLg>
      </FlexWrapper>
      <ScrollView style={{flex: 1, }}>
      <View  >
      <TextXl >Salam Aleikoum  👋🏽</TextXl>
      <TextRegular  style={{color: colors.textLightColor}}>Entrez vos identifiants après votre inscription au centre</TextRegular>
      </View>
     
      <TextMedium style={{marginVertical: 15}}>Selectionner votre Centre</TextMedium>
      <BtnBx
       underlayColor={colors.grayLiht}
       onPress={() => setShowModal(true)}
      >
        <TextRegular>Centre abobo</TextRegular>
      </BtnBx>

      <Controller control={control} name="username" render={({field:{onChange, value}, fieldState:{error}}) =>(

        <CustomInput
        value={value}
        label="Nom d'utilisateur" 
         placeholder="Entrez votre nom d'utilisateur"
         onChangeText={onChange}
         error={!!error}
         errorDetails={error?.message}
        />
      )}
      
      />


      <Controller control={control} name="password" render={({field: {onChange, value}, fieldState:{error}}) => (
        
        <CustomInput 
         value={value}
         label="Mot de passe"
         placeholder="* * * * * * * * * "
         icon='eye'
         secureTextEntry={true}
         onChangeText={onChange}
         error={!!error}
         errorDetails={error?.message}

        />
      )}
      />

    
      <FlexWrapper style={{width: width-20, marginTop: height*0.05,}} >
        <FlexWrapper>
            <MaterialIcons name="check-box" size={24} color={colors.primary} />
            <TextMedium style={{justifyContent: "center"}} > Se rappeler de moi </TextMedium>

        </FlexWrapper>

      </FlexWrapper>
      {/* { console.log(errors)} */}
      {errors &&  Object.keys(errors).length? <TextRegular style={{color: colors.textDanger,marginBottom: 5}}>Veuillez remplir tous les champs</TextRegular>: null}
      <CustomButton
       title="Se connecter"
       onPress={
        handleSubmit(loginPatient)
        // navigation.navigate('Home')
      }
      />
      </ScrollView>
      </View>
      </FormContainer>
      }
     </>
  )
}

export default Login

const styles = StyleSheet.create({})