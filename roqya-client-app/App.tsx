import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/common/colors';
import NavStack from './src/routes/NavStack';

export default function App() {
  return (
    <NavStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
