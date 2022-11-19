import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamsList } from '../routes/DrawerNav'
import { Form, TextLg, TextRegular } from '../common/componentStyled'
import { colors } from '../common/colors'

type Props= NativeStackScreenProps<RootDrawerParamsList, 'Rappels'>
const Rappels: React.FC<Props> = () => {
  return (
    <Form>
      <ScrollView
       showsVerticalScrollIndicator={false}
      >
        <TextLg  style={{color: colors.primary, marginVertical: 15}} >Rappels</TextLg>
        <TextRegular>
        Rappelez vous chers frères et sœurs, que la sorcellerie et les attaques
de djinns sont des épreuves de Dieu. Le croyant doit davantage se
tourner vers Dieu en évitant ce qui Lui déplait et en multipliant ce
qu’Il aime notamment s’éloigner des péchés et s’accrocher aux
rappels zikrs et aux invocations (dou’as).

 </TextRegular>
 <TextLg style={{color: colors.primary}} >1-
 <TextRegular>Boire 1 verre d’eau de coran matin, midi et soir.</TextRegular></TextLg>
 
 <TextLg style={{color: colors.primary}} >2-

 <TextRegular>
  Lavez vous tous les jours matin et soir avec environ 1,5 L d’eau
 de Coran en formulant l’intention de détruire le mal et que ce mal
 retourne d’où il vient. Relaver plusieurs fois, pendant 5 mn les
 endroits douloureux. Faites le bain dans une bassine pour recueillir
 l’eau du lavage puis la verser dans un endroit propre en disant
 «Bismillah Rahmani Rahim » afin de ne pas laisser l’eau de coran
 aller dans les égouts.
 </TextRegular>
 </TextLg>

 <TextLg style={{color: colors.primary}} >3-
 <TextRegular>Frotter la pommade ou l’huile de « Habbat sawda » sur les
 endroits indiqués ou sur tout le corps en insistant sur les parties
 douloureuses et concomitamment (dans le même moment) réciter
 la « fatiha » 11, 21 fois ou plus.</TextRegular></TextLg>

 <TextLg style={{color: colors.primary}} >4-
 <TextRegular> Asperger tous les coins et recoins de la maison avec l’eau coran-
 nisée au moins pendant deux jours successifs.</TextRegular></TextLg>
 
 <TextLg style={{color: colors.primary}} >5-
 <TextRegular>Mettre de l’encens dans la maison (matin et soir) et sous le bou-
 bou, le pagne ou sous la robe durant tout le traitement.</TextRegular></TextLg>


 <TextLg style={{color: colors.primary}} >6-
 <TextRegular>Utiliser l’huile de « habbat sawda » pour la toilette intime au
 coucher et la boire à raison d’une cuillerée à café trois fois par jour</TextRegular></TextLg>
 
 <TextLg style={{color: colors.primary}} >7-
 <TextRegular>La sana Makki est une tisane qui détruit la sorcellerie mangée et
 aide à la purification du sang. Verser une cuillerée à soupe de la
 sana makki « tisane » dans une casserole d’un demi-litre (1/2) d’eau coranisée, faire bouillir à feu doux pendant 15 mn environ,
 laisser refroidir et boire la solution obtenue, de préférence à jeun
 le matin ou à défaut quand vous pouvez. Il est préférable de ne
 manger qu’après 30 min.</TextRegular></TextLg>


 <TextLg style={{color: colors.primary}} >8-
 <TextRegular>« Zikrs » Durant tous les jours du traitement : 
 coucher et la boire à raison d’une cuillerée à café trois fois par jour  
 « Lâ ilaha ilâllahou wahdahou lâ charîka lahou lahoul moulkou wa
 lahoul hamdou wa houwa ‘alâ koulli chay’ine qadir » (100 fois
 matin et/ou soir).
 "Il n'y a d'autre divinité qu'Allah Unique, sans associé. A Lui la
 royauté, à Lui la louange et Il est capable de toute chose. (100 fois
 matin et/ou soir).
 </TextRegular></TextLg>

 <TextLg style={{color: colors.primary}} >9-
 <TextRegular>Protections après chaque prière : (voir page 16 – 19)
 - Ayatoul Koursiy (s.2 v.255) 1 fois
 - Sourate Ikhlass (s.112) 1 fois sauf Soubh et magribh 3 fois
 - Sourate Falaq(s.113) 1 fois sauf Soubh et magribh 3 fois
 - Sourate Nass (s.114) 1 fois sauf Soubh et magribh 3 fois
A’oudzou bikalimâti lahi tâmâti min charri mâ khalaq.
« Je cherche refuge auprès des paroles parfaites d’Allah contre le
 mal de Ses créatures. » (3 fois)
 
 Bismillahi ladzî lâ yadourrouhou ma a ismihi chay oun fil Ardi wa
 lâ fî samâ’i, wa Houwas Samî’oul ‘alîm (3 fois).
« Au Nom de Dieu dont la mention empêche toute chose de nuire,
tant sur la Terre que dans le Ciel. Il entend toute chose et Il est
Omniscient. »
 </TextRegular></TextLg>

 <TextLg style={{color: colors.primary}} >10-
 <TextRegular>Combat en rêve contre djinns et sorciers : « Aynamâ takounou, yaati bikoumoullahou Djami ane, Innallaha,
 ala koulli chay -ine qadir » 100 fois ou plus (S2 V148)
« Où que vous soyez, Dieu vous ramènera tous à Lui. En vérité,
la puissance de Dieu s’étend à toute chose. »
En demandant à ALLAH de nous envoyer en rêve tous ceux qui
nous font le mal (humains ou djinns) et qu’Il nous aide à nous
débarrasser d’eux.</TextRegular></TextLg>

<TextLg style={{color: colors.primary}} >11-
 <TextRegular>Répétez l’ensemble des opérations jusqu’à 12 jours selon les
 cas puis revenir pour le contrôle.</TextRegular></TextLg>
 
 <TextLg style={{color: colors.primary}} >NB:*
 <TextRegular> Les femmes doivent continuer le traitement, les dou’as de
 protection et les zikrs même en état de menstrues car il s’agit
 là d’un traitement.
 <TextLg style={{color: colors.primary}}>*</TextLg> Il est recommandé et préférable d’enchaîner le traitement sans
 rater aucun jour sauf en cas de force majeure. En cas de manque de
 produits durant le traitement, vous devez vous rendre au centre
 pour en acheter.
 <TextLg style={{color: colors.primary}}>*</TextLg> La prise de la tisane provoque des douleurs de ventre proportionnelles au degré de sorcellerie mangée.
Elle donne une légère diarrhée afin de vous débarrasser de la maladie, l’idéal serait d’enchaîner sa prise sans interruption selon le
nombre de jours à la limite du supportable.
<TextLg style={{color: colors.primary}}>*</TextLg> Il faut complètement éviter les péchés (pratique de la sorcellerie,
fornication, usure, alcool,...) aussi bien pendant qu’après le traitement car les péchés annulent toutes les protections et nous rendent
très vulnérables face aux sorciers et aux djinns.
Aussi Allah n’exaucera pas nos vœux.
 </TextRegular></TextLg>

  </ScrollView>
    </Form>
  )
}

export default Rappels

const styles = StyleSheet.create({})