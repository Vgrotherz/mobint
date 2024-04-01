import React from "react";
import { ActivityIndicator, StyleSheet, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Loader = () => (
    <View>
      <ActivityIndicator style={styles.container} size="large" color="black"/>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      width: screenWidth * 0.2,
      height: screenWidth *0.2
    }
  })


export default Loader;