import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routes/NavStack'
import { FlexWrapper, Form, TextLg, TextMedium, TextRegular } from '../common/componentStyled'
import { colors } from '../common/colors'
import { CustomButton } from '../components'
import { Entypo } from '@expo/vector-icons'

type Props = NativeStackScreenProps<RootStackParamList, 'Fallpage'>
const FallPage: React.FC<Props> = ({ navigation }) => {
    return (
        <Form>
            <TextLg style={{ color: colors.textColor, marginBottom: 10 }}>C'est quoi la Roqya</TextLg>
            <TextRegular>
                La roqya est la guérison et le soulagement de gens qui souffrent et sont bloqués depuis des années. Deuxièmement c'est une protection des musulmans contre le chirk et un renforcement de leur foi. Troisièmement c'est une porte de daâwa pour les non musulmans. Quatrièmement, c'est un combat contre les sorciers, satanistes, féticheurs, voyants, et leurs associés et toutes formes de chirk jusqu'à ce que ça disparaisse totalement.
            </TextRegular>
            <FlexWrapper>
                <Entypo name="arrow-bold-right" size={24} color={colors.primary} />
                <TextRegular
                onPress={() => navigation.navigate("Fallpage2")}
                style={{marginTop:-5, color: colors.primary}}>poursuivez la lecture </TextRegular>
            </FlexWrapper>
            <View
             style={{marginTop: 10}}
            >
            <CustomButton
             onPress={() => navigation.navigate("Login")}
             title="Vers la page de connexion"
            />

            </View>
        </Form>
    )
}

export default FallPage

const styles = StyleSheet.create({})