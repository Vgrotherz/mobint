import React from "react";
import { View, Image, StyleSheet} from "react-native"; 

import { img_large } from "../utils/parameters";
 

const imgLarge = require('../../res/img/logo.png');

const StartingScreen = () => {

    return(
        <View style={styles.container}>
            <Image 
                source={imgLarge}
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
        width: img_large, 
        height: img_large 
    }
})


export default StartingScreen;