import React from "react";

import { View, Image, StyleSheet } from "react-native-web"; 

const img_large = require('../res/img/logo.png')

const StartingScreen = () => {
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={img_large}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backGroundColor: 'white'
    },
    image: {
        width: '50vw'
    }
})


export default StartingScreen;