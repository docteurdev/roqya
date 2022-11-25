import { Alert, Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Entypo, MaterialIcons } from '@expo/vector-icons';
import FormContainer from '../../components/container/FormContainer';
import { BtnBx, FlexWrapper, InputBx, RoundedMd, TextLg, TextMedium, TextRegular, TextXl } from '../../common/componentStyled'
import { CenterList, CustomButton, CustomInput, Loading } from '../../components';
import { colors } from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/NavStack';

// ivalidation
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from 'react-redux';
import { getCenters } from '../../redux/centres';
import axios from 'axios';
import { setConsultation } from '../../redux/consultation';
import { AppContext } from '../../hooks/constextApi';
import { login } from '../../redux/connexions';


const { height, width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, "Login">


type ValidationType = {
  username: string,
  password: string,
  code: string,
  idCentre: string
}

const Login = ({ navigation }: Props) => {

  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const allCentres = useSelector((state: any) => state.centres);

  const dispatch = useDispatch();

  const storePatient = async (value:any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('patient', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  // const {logout,signup} = useContext(AppContext)

  // console.log(logout);
  
  // console.log(" is selcetedCentre-------------------");

  //    console.log(useSelector((state: any) => state.centres.selcetedCentre));

  useEffect(() => {
    dispatch(getCenters())
  }, [])

  const shema = Yup.object({
    username: Yup.string().required("Veuillez entrer votre nom d'utilisateur"),
    password: Yup.string().min(4, "mot de passe trop court").required("Veuillez entrer votre mot de passe"),
    code: Yup.string().required('Veuillez entrer votre code patient')
  }).required();

  const { control, handleSubmit, reset, clearErrors, formState: { errors } } = useForm<ValidationType>({ resolver: yupResolver(shema) })

  const loginPatient = (user: any) => {
    setIsLoading(true)
    //  console.log(user);
    let data= {
      centreId: allCentres.selcetedCentre.id,
      id: user.code,
      password: user.password,
      nom: user.username
    }

      // console.log(data);

     axios.post('http://192.168.43.35:3001/login/patient',data)
        .then(res =>{
             if(res){
               
               reset()
              storePatient(res.data)
              dispatch(setConsultation(res.data))
              dispatch(login(res.data))
              //  navigation.navigate("Home")
              setTimeout(() =>{
                setIsLoading(false)

              }, 1500)

              //  console.log(res.data);

             }
            
        }).catch(error =>{
          setTimeout(() =>{
            setIsLoading(false)

          }, 1500)
          setTimeout(() =>{
            error && alert("verifiez vos données")

          }, 1600)
           console.log(error);
          
        })

  }

  return (
    <>
      {
        isLoading ? <Loading /> :
          <FormContainer >

            <View style={{ flex: 1 }}>
              <Modal
                visible={showModal}
                transparent
              >
                <CenterList isModal={setShowModal} centres={allCentres.centres} />
              </Modal>
              <FlexWrapper style={{ width: 200, marginTop: height * 0.05, marginBottom: height * 0.02}} >
                {/* <RoundedMd>
            <Entypo name="chevron-small-left" size={24} color="black" />
        </RoundedMd> */}
                <TextLg style={{ color: colors.primary }}>Connexion</TextLg>
              </FlexWrapper>
                <View  >
                  <TextXl onPress={() => dispatch(login())} >Salam Aleikoum  👋🏽</TextXl>
                  <TextRegular style={{ color: colors.textLightColor }}>Entrez vos identifiants après votre inscription au centre</TextRegular>
                </View>
              <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>

                <TextMedium style={{ marginVertical: 15 }}>Selectionner votre Centre</TextMedium>
                <BtnBx
                  underlayColor={colors.grayLiht}
                  onPress={() => setShowModal(true)}
                >
                  <TextRegular style={{ color: colors.primary }} > {Object.keys(allCentres.selcetedCentre).length ? allCentres.selcetedCentre.nom : 'appuyer pour voir la liste'} </TextRegular>
                </BtnBx>

                <Controller control={control} name='code' render={({ field: { onChange, value }, fieldState: { error } }) => (

                  <CustomInput
                    value={value}
                    label="Votre code patient"
                    placeholder="Entrez Votre code patient"
                    onChangeText={onChange}
                    error={!!error}
                    errorDetails={error?.message}
                  />
                )}

                />

                <Controller control={control} name="username" render={({ field: { onChange, value }, fieldState: { error } }) => (

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


                <Controller control={control} name="password" render={({ field: { onChange, value }, fieldState: { error } }) => (

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


                <FlexWrapper style={{ width: width - 20, marginTop: height * 0.05, }} >
                  {/* <FlexWrapper>
                    <MaterialIcons name="check-box" size={24} color={colors.primary} />
                    <TextMedium style={{ justifyContent: "center" }} > Se rappeler de moi </TextMedium>

                  </FlexWrapper> */}

                </FlexWrapper>
                {/* { console.log(errors)} */}
                {/* {errors && Object.keys(errors).length ? <TextRegular style={{ color: colors.textDanger, marginBottom: 5 }}>Veuillez remplir tous les champs</TextRegular> : null} */}
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