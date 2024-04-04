import { StyleSheet } from "react-native";
import { screenWidth, margin1, text1, iconSize, margin2, textColor, text0, backgroundColor, mainColor, margin3, accentColor, text2, text3, cardBackgroundColor, highlightTextColor, logoSize } from "../utils/parameters"; 

export const styles = StyleSheet.create({
    wholeCompanies: {
        width:"100%"
    },
    cardBlock : {
        // backgroundColor: 'blue',
        // margin: margin1,
        marginTop: margin1,
        marginLeft: margin1,
        marginRight: margin1,
        
    },
    container: {
        width: '100%',
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: cardBackgroundColor
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
        fontSize: text1,
        color: highlightTextColor,
        flexWrap: 'wrap',
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
        width: iconSize,
        height: iconSize
    },
    smallIcons:{
        marginTop: margin1,
        marginLeft: margin1,
    },
    logoStyle: {
        borderRadius: 40,
        width: logoSize,
        height: logoSize,
        marginBottom: margin2,
        // paddingLeft: 10,
    },
    scoreNumber: {
        fontSize: text0,
        alignItems: 'flex-end',
        color: highlightTextColor,
    },
    scoreText: {
        color: backgroundColor,
        marginLeft: margin2,
        marginBottom: 2
    }, 
    scoreBlock: {
        marginTop: margin1,
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
        marginBottom: margin1,
        // alignContent: 'center'
        // justifyContent: 'center'
        // alignItems: 'center'
    },
    cardButton: {
        // padding:10,
        paddingVertical:12,
        // paddingHorizontal:15,
        borderRadius: 15,
        marginTop: margin2,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor
    },
    buttonText: {
        // paddingTop: 10,
        
        color: mainColor,
        fontSize: text2
    },
    wrap: {
        flexWrap:'wrap',
    }
})