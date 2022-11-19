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

type Props = NativeStackScreenProps<RootDrawerParamsList>



const CustomDrawer: React.FC<Props> = ({ navigation, ...props }) => {
    // console.log(props.navigation);

    return (
        <DrawerContentScrollView {...props}
        >

            {/* <DrawerItemList {...props} /> */}
            {/* <DrawerItem label="loo" onPress={() => alert('okk')}> */}
            {/* </DrawerItem> */}
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
                <TextMedium style={{ color: colors.textColor }}>Ziarah fathm</TextMedium>
                <TextRegular>05 45 68 93</TextRegular>
                <TextRegular>Prochain rendez-vous <TextLg style={{ color: colors.primary, fontSize: 15 }}> 21/12/2022</TextLg></TextRegular>
                <TextRegular>Nombre total de Rendez-vous <TextLg style={{ color: colors.primary, fontSize: 15 }}> 10 </TextLg></TextRegular>

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
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})