import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native"; 
import Cards from "../cards/Cards";
import Loader from "../loader/Loader";
import { cardBackgroundColor, highlightTextColor, mainColor, margin1, margin2, text1, text2, textColor } from "../utils/parameters";

const CardList = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isAllCardLoading, setAllCardLoading ] = useState(false);



    return(
        <View style={styles.container}>
            <View style={styles.manageBlock}>
                <Text style={styles.manageText}>
                    Управление картами
                </Text>
            </View>
            <View style={styles.cardsBlock}>
                {!isLoading? (
                    <>  
                        {isAllCardLoading? (
                        <View style={styles.loader}>
                            <Loader />
                        </View>) : null }
                        <Cards />
                        <Text style={styles.loadCardsText}>Подгрузка компаний</Text>
                    </>
                ) : (
                    <Cards />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        
    },
    manageBlock: {
        flex:1,
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
    
    }    
})


export default CardList;