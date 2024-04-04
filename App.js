// App.js
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';

import StartingScreen from './components/startingScreen/StartingScreen';
import CardList from './components/cardList/CardList';
import { cardBackgroundColor } from './components/utils/parameters';
import store from './components/utils/store';

const App = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      store.setIsLoad(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {store.isLoad ? <StartingScreen /> : <CardList />}
      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cardBackgroundColor,
    marginTop: 20,
  },
});

export default App;