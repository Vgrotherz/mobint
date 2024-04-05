import { StyleSheet } from "react-native"; 
import { cardBackgroundColor, highlightTextColor, iconSize, logoSize, mainColor, margin1, margin2, text1, text2, textColor } from "../utils/parameters";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        
    },
    blur: {
        color: 'transparent',
        textShadow: '0 0 8px #000'
    },
    manageBlock: {
        paddingTop:20,
        alignItems:'center',
        backgroundColor: cardBackgroundColor,
    },
    manageText: {
        color: mainColor,
        fontSize: text1,
        marginTop: margin1,
        marginBottom: margin1,
    }, 
    cardsBlock : {
        flex: 9,
        backgroundColor: textColor,
        alignItems:'center',
        

    },
    loadCardsText: {
        color: highlightTextColor,
        marginTop: margin2,
        fontSize: text2,

    },
    loader: {
        marginTop: margin1,
        marginBottom: margin2
    
    }, 
    noCompaniesText: {
        marginTop: margin1,
        fontSize: text2
    },
    errorIcon: {
        width: logoSize * 0.8,
        height: logoSize * 0.8,
        tintColor: 'red',
        marginBottom: 10,

    },
    popup: {
        marginTop: 10,
    }, 
    closeButton: {
        borderRadius: 30
    },
    popupBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    popupContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 10,
    },
    popupTextBlock: {
        alignItems: 'center',
    },
    popupText: {
        color: '#949494',
    },
    popButtonBlock: {
        marginTop: 20,
    },

})