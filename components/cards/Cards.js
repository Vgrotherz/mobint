import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native"; 

import { screenWidth, margin1 } from "../utils/sizes";

const logo = require('../../res/img/logo.png')
const eyeIcon = require('../../res/img/eye_white.png')


const Cards = () => {
    return(
        <View style={styles.container}>
            <View style={[styles.stroke, styles.firstStroke ]}>
                <Text>Bonus Money</Text>
                <Image source={logo} style={styles.logoSize}/>
            </View>
            <View >
                <Text>200 баллов</Text>
                <View style={styles.stroke}>
                    <View>
                        <Text>Кэшбэк</Text>
                        <Text>1%</Text>
                    </View>
                    <View>
                        <Text>Уровень</Text>
                        <Text>Базовый уровень тест</Text>
                    </View>
                    
                </View>
                <View>
                        <Image source={eyeIcon} style={[styles.margin1_Top, styles.iconSize, styles.eyeIcon]} ></Image>
                        <Image></Image>
                        <View>
                            <Text>Подробнее</Text>
                        </View>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#fff"
    }, 
    stroke: {
        flexDirection: 'row'
    },
    firstStroke: {
        justifyContent: "space-between"
    },
    margin1_Top: {
        marginTop: margin1,
    
    },
    eyeIcon: {
        tintColor:'#2688eb'
    },
    iconSize: {
        width: screenWidth * 0.08,
        height: screenWidth * 0.08
    },
    logoSize: {
        width: screenWidth * 0.15,
        height: screenWidth * 0.15
    }
})

export default Cards;