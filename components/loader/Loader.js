import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { margin1, sizePreloader } from "../utils/parameters";
import { highlightTextColor, margin2, text2 } from "../utils/parameters"; 

const Loader = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black"/>
      <Text style={styles.loadCardsText}>Подгрузка компаний</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      marginTop: margin1,
      marginBottom: margin1,
      alignItems:'center'
    }, 
    loadCardsText: {
      color: highlightTextColor,
      marginTop: margin2,
      fontSize: text2,
    }
  })


export default Loader;