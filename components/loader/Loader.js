import React from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { sizePreloader } from "../utils/parameters";

const Loader = () => (
    <View>
      <ActivityIndicator size="large" color="black"/>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      width: sizePreloader,
      height: sizePreloader
    }
  })


export default Loader;