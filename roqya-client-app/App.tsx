import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts } from  'expo-font';
 import  "./assets/fonts/PlusJakartaSans-Bold.ttf";
import NavStack from './src/routes/NavStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import {colors} from './src/common/colors'

export default function App() {

  const [fontsLoaded]= useFonts({
    'fontBold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'fontSemiBold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'fontRegular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Provider store={store}>
      {/* <StatusBar barStyle={"dark-content"} backgroundColor={colors.inputborderColor} /> */}
      <NavStack/>
    </Provider>
  );
}

