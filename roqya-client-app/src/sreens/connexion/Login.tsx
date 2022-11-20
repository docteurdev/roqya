import { Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import FormContainer from '../../components/container/FormContainer'
import { BtnBx, FlexWrapper, InputBx, RoundedMd, TextLg, TextMedium, TextRegular, TextXl } from '../../common/componentStyled'
import { CenterList, CustomButton, CustomInput, Loading } from '../../components';
import { colors } from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/NavStack';
// import logo from "../../images/roqya.jpg";
const {height, width}= Dimensions.get('window');

type Props= NativeStackScreenProps<RootStackParamList, "Login">



const Login = ({navigation}: Props) => {

const [showModal, setShowModal]= useState(true)
const [isLoading, setIsLoading]= useState(false)






  
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

    
      <FlexWrapper style={{width: width-20, marginVertical: height*0.05,}} >
        <FlexWrapper>
            <MaterialIcons name="check-box" size={24} color={colors.primary} />
            <TextMedium style={{justifyContent: "center"}} > Se rappeler de moi </TextMedium>

        </FlexWrapper>

      </FlexWrapper>
      <CustomButton
       title="Se connecter"
       onPress={() => navigation.navigate('Home')}
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