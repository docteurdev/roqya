import React from 'react'
import styled from "styled-components/native";
import { colors } from "../common/colors";
import { TextType } from '../common/types';
const Textstyled= styled.Text`
    font-size: 15px;
    color: ${colors.white};
`


const SmallText: React.FC<TextType> = (props) => {
  return (
    <Textstyled>
        {props.Children}
    </Textstyled>
  )
}

export default SmallText
