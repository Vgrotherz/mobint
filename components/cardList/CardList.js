import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native"; 
import Cards from "../cards/Cards";
import Loader from "../loader/Loader";

const screenWidth = Dimensions.get('window').width;

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
            <View style={styles.cardBlock}>
                {isLoading? (
                    <>  
                        {!isAllCardLoading? (
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
    },
    manageText: {
        color: '#2688eb',
        fontSize: screenWidth * 0.1,
        marginTop: screenWidth * 0.04,
        marginBottom: screenWidth * 0.04,
   
    }, 
    cardBlock : {
        flex: 9,
        backgroundColor: '#efefef',
        alignItems:'center',
    },
    loadCardsText: {
        color: "#1a1a1a",
        marginTop: screenWidth * 0.02,
        fontSize: screenWidth * 0.06,

    },
    loader: {
        marginTop: screenWidth *0.04,
    
    }    
})


export default CardList;