import styled from 'styled-components/native';
import { colors } from './colors';


export const Form = styled.View`
    flex: 1;
    background-color: ${colors.white};
    justify-content: center;
    width: 100%;
    padding: 10px;
`

export const ConsultationStyled= styled.TouchableOpacity`
  height:  68px;
  background-color: ${colors.white};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 6px;
  border: 1px solid ${colors.inputborderColor};
`

export const InputBx= styled.View`
  width: 100%;
  border: 2px solid ${colors.inputborderColor};
  background-color: ${colors.white};
  height:52px ;
  border-radius: 16px;
  overflow: hidden;
`
export const InputFeild= styled.TextInput`
  border: none;
  height: 100%;
  padding: 5px;
 
`
export const IconWrapper = styled.TouchableHighlight`
 position: absolute;
 right: 0;
 top:0;
 width: 40px;
 height: 100%;
 justify-content: center;
 align-items: center;
`
// typos
export const TextMedium= styled.Text`
  font-size: 14px;
  color: ${colors.textColor};
  font-family: fontSemiBold;
`

export const TextLg= styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-family: fontBold;
`

export const TextXl= styled.Text`
  font-size: 24px;
  color: ${colors.textColor};
  font-family: fontSemiBold;
`
export const TextRegular= styled.Text`
  font-size: 14px;
  color: ${colors.textColor};
  font-family: fontRegular;
`
//  flex
export const FlexWrapper= styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 align-self: flex-start;
`

// rounded
export const RoundedMd= styled.TouchableOpacity`
 width: 48px;
 height: 48px;
 border: 2px solid ${colors.inputborderColor};
 border-radius: 50px;
 justify-content: center;
 align-items: center;
`

// buttons

export const ButtonLg= styled.Pressable`
 background-color: ${colors.primary};
 align-items: center;
 padding: 10px 0;
 border-radius: 20px;
 justify-content: center;
 align-items: center;
`
// item box
export const ConsulTileBx= styled.View`
 background-color: ${colors.gray};
 border-radius: 8px;
 width: 100px;
 height: 30px;
 justify-content: center;
 align-items: center;
`

// divier

export const Divider= styled.View`
 width: 100%;
 height: 3px;
 background-color: ${colors.inputborderColor};
 margin: 15px 0px;
`
 
