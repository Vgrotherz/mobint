import React from "react";
import { ActivityIndicator, StyleSheet, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Loader = () => (
    <View>
      <ActivityIndicator style={styles.loader}/>
    </View>
  );

const styles = StyleSheet.create({
    loader: {
        size: 'large'
        
    },
})

export default Loader;