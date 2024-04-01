import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native"; 

import { screenWidth, margin1, text1, iconSize, margin2, textColor, text0, backgroundColor, mainColor, margin3, accentColor, text2, text3 } from "../utils/parameters";

const logo = require('../../res/img/logo.png');
const eyeIcon = require('../../res/img/eye_white.png');
const trashIcon = require('../../res/img/trash_white.png')

const Cards = () => {
    return(
        <View style={styles.cardBlock}>
            <View style={styles.container}>
                <View style={styles.innerContiner}>
                    <View style={[styles.stroke, styles.firstStroke ]}>
                        <Text style={styles.cardName} >Bonus Money</Text>
                        <Image source={logo} style={styles.logoStyle}/>
                    </View>
                    <View style={styles.column}>
                        <View style={[styles.stroke, styles.scoreBlock]}>
                            <Text style={styles.scoreNumber}>200</Text>
                            <Text style={styles.scoreText}>баллов</Text>
                        </View>
                        <View style={styles.stroke}>
                            <View style={styles.cashbackBlock}>
                                <Text style={styles.cashback}>Кэшбэк</Text>
                                <Text style={styles.cashbackValue}>1%</Text>
                            </View>
                            <View style={styles.levelBlock}>
                                <Text style={styles.level}>Уровень</Text>
                                <Text style={styles.levelValue}>Базовый уровень тест</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View style={[styles.stroke, styles.lastStroke]}>
                        <Image source={eyeIcon} style={[styles.iconSize, styles.eyeIcon]} ></Image>
                        <Image source={trashIcon} style={[styles.iconSize, styles.trashIcon ]}></Image>
                        <View style={styles.cardButton}>
                            <Text style={styles.buttonText}> Подробнее</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBlock : {
        width: '100%',
        // margin: margin1,
        marginTop: margin1,
        marginLeft: margin1,
        marginRight: margin1,
        
    },
    container: {
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: "#fff"
    }, 
    innerContiner: {
        marginTop: margin1,
        marginLeft: margin1,
        marginRight: margin1,
    },  
    stroke: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column',
        borderBottomWidth:2,
        borderBottomColor: textColor,
    },
    firstStroke: {
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth:2,
        borderBottomColor: textColor,
        
    },
    cardName: {
        fontSize: text1
    },

    margin1_Top: {
        marginTop: margin1,
    
    },
    eyeIcon: {
        tintColor: mainColor,
        marginRight: margin3
    },
    trashIcon: {
        tintColor: accentColor,
        marginRight: margin3
    }
    ,
    iconSize: {
        marginTop: margin1,
        width: iconSize,
        height: iconSize
    },
    logoStyle: {
        width: screenWidth * 0.15,
        height: screenWidth * 0.15,
        marginBottom: margin2
    },
    scoreNumber: {
        fontSize: text0
    },
    scoreText: {
        color: backgroundColor,
        marginLeft: margin2
    }, 
    scoreBlock: {
        alignItems: 'flex-end'
    },
    cashbackBlock:{
        marginTop:margin1
    },  
    cashback:{
        color: backgroundColor,
        fontSize: text3,
    }, 
    cashbackValue:{
        marginTop:margin2,
        fontSize: text2
    },   
    levelBlock: {
        marginTop:margin1,
        marginLeft: margin3
    },
    level:{
        color: backgroundColor,
        fontSize: text3,
    },
    levelValue: {
        fontSize: text2,
        marginTop: margin2,
        marginBottom: margin2
        
    },
    cashbackValue: {
        marginTop: margin2
    },
    lastStroke: {
        marginBottom: margin1
        // alignItems: 'center'
    },
    cardButton: {
        borderRadius: 15,
        marginTop: margin2,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: textColor
    },
    buttonText: {
        color: mainColor,
        fontSize: text2
    }
})

export default Cards;