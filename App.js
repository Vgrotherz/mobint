import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


import StartingScreen from './components/startingScreen/StartingScreen';
import CardList from './components/cardList/CardList';
import { cardBackgroundColor } from './components/utils/parameters';

export default function App() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3000); // Задержка в 3 секунды
  }, []);

  return (
    <View style={styles.container}>
      {isLoad ? (
        <StartingScreen />
      ) : (
        <CardList />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cardBackgroundColor,
  },
});
