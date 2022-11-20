import { ComponentProps, ReactNode } from "react"
import { GestureResponderEvent, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Entypo } from '@expo/vector-icons';
// view interface
export interface ContainerType{
 Children?: ReactNode;
 style?: StyleProp<ViewStyle>;
 onPress: ((event: GestureResponderEvent) => void) | undefined;
}
// text interface

export interface TextType{
    Children: ReactNode;
    style?: StyleProp<TextStyle>;
}

interface ExtratInput{
    //Text interface
    label: ReactNode;
    secureTextEntry?: boolean;
    style?: StyleProp<TextStyle>; 
    //Icon interface
    icon?: ComponentProps<typeof Entypo>["name"];
    error?: boolean,
    errorDetails?: string
}

// input interface
export type InputProps = TextInputProps & ExtratInput;

// button interface

export interface ButtonInterface{
    children:ReactNode;
    style: StyleProp<ViewStyle>;
    textStyle: StyleProp<TextStyle>;
    onPress: ((event: GestureResponderEvent) => void) |undefined;

}