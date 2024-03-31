import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native"; 

 

const img_large = require('../../res/img/logo.png');

const screenWidth = Dimensions.get('window').width;

const StartingScreen = () => {

    return(
        <View style={styles.container}>
            <Image 
                source={img_large}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: screenWidth * 0.5,  
    }
})


export default StartingScreen;