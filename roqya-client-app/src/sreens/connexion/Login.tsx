import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import FormContainer from '../../components/container/FormContainer'
import { FlexWrapper, InputBx, RoundedMd, TextLg, TextMedium, TextRegular, TextXl } from '../../common/componentStyled'
import { CustomButton, CustomInput } from '../../components';
import { colors } from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/NavStack';
// import logo from "../../images/roqya.jpg";
const {height, width}= Dimensions.get('window');

type Props= NativeStackScreenProps<RootStackParamList, "Login">



const Login = ({navigation}: Props) => {
  return (
      <FormContainer >
      <View style={{flex: 1}}>

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
            <MaterialIcons name="check-box" size={24} color="black" />
            <TextMedium style={{justifyContent: "center"}} > Se rappeler de moi </TextMedium>

        </FlexWrapper>
        <TextMedium style={{ color: colors.textDanger}} >Mp oublié </TextMedium>
      </FlexWrapper>
      <CustomButton
       title="Se connecter"
       onPress={() => navigation.navigate('Home')}
      />
        <TextMedium style={{color: colors.textLightColor,textAlign: 'center', marginTop: 20}}> Si vous n’avez pas un compte?
         <TextMedium style={{color: colors.textDanger}} onPress={() => navigation.navigate("Register")}>  Créer </TextMedium> </TextMedium>

      </ScrollView>
      </View>
    </FormContainer>
  )
}

export default Login

const styles = StyleSheet.create({})