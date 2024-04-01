import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import StartingScreen from './components/startingScreen/StartingScreen';
import CardList from './components/cardList/CardList';
import { cardBackgroundColor } from './components/utils/parameters';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StartingScreen /> */}
      <CardList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cardBackgroundColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
