import { StyleSheet } from "react-native"; 
import { cardBackgroundColor, highlightTextColor, mainColor, margin1, margin2, text1, text2, textColor } from "../utils/parameters";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        
    },
    manageBlock: {
        // flex:1,
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
        paddingBottom: 10
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
    }
})