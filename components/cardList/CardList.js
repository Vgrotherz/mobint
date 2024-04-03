import React, { useState } from "react";
import { View, Image, Text } from "react-native"; 
import Cards from "../cards/Cards";
import Loader from "../loader/Loader";

import { styles } from "./cardListStyles";

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
                        <Cards />
                        {!isAllCardLoading? (
                        <>
                            <View style={styles.loader}>
                                <Loader />
                            </View> 
                            <Text style={styles.loadCardsText}>Подгрузка компаний</Text>
                        </>
                        ) : null }
                    </>
                ) : (
                    <Cards setIsLoading={setIsLoading}/>
                )}
            </View>
        </View>
    )
}



export default CardList;