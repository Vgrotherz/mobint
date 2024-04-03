import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList, RefreshControl } from "react-native"; 
import { styles } from "./cardsStyles";
import fetchData from "../fetchData/fetchData"; 

const eyeIcon = require('../../res/img/eye_white.png');
const trashIcon = require('../../res/img/trash_white.png')

const Cards = () => {
    const [companies, setCompanies] = useState([]); // Состояние для хранения списка компаний
    const [refreshing, setRefreshing] = useState(false); // Состояние для отслеживания обновления страницы

    useEffect(() => {
        fetchData()
            .then(data => {
                const { companies } = data;
                setCompanies(companies);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []); 

    const onRefresh = () => {
        setRefreshing(true); 
        fetchData()
            .then(data => {
                const { companies } = data;
                setCompanies(companies);
                setRefreshing(false); //  false после завершения обновления
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setRefreshing(false); 
            });
    };


    return(
        <View style={styles.wholeCompanies}>
            <FlatList
                data={companies}
                keyExtractor={(item) => item.company.companyId}
                renderItem={({ item }) => (
                    <View style={styles.cardBlock}>
                        <View style={[styles.container, { backgroundColor: item.mobileAppDashboard.cardBackgroundColor }]}>
                            <View style={styles.innerContiner}>
                                <View style={[styles.stroke, styles.firstStroke ]}>
                                    <View style={styles.wrap}>
                                        <Text style={[styles.cardName, { color: item.mobileAppDashboard.highlightTextColor}]}>{item.mobileAppDashboard.companyName}</Text>
                                    </View>
                                    <Image source={{ uri: item.mobileAppDashboard.logo }} style={styles.logoStyle}/>
                                </View>
                                <View style={styles.column}>
                                    <View style={[styles.stroke, styles.scoreBlock]}>
                                        <Text style={[styles.scoreNumber, { color: item.mobileAppDashboard.highlightTextColor}]}>{item.customerMarkParameters.mark}</Text>
                                        <Text style={[styles.scoreText, {color: item.mobileAppDashboard.textColor}]}>баллов</Text>
                                    </View>
                                    <View style={styles.stroke}>
                                        <View style={styles.cashbackBlock}>
                                            <Text style={[styles.cashback, {color: item.mobileAppDashboard.textColor}]}>Кэшбэк</Text>
                                            <Text style={styles.cashbackValue}>{item.customerMarkParameters.loyaltyLevel.markToCash}%</Text>
                                        </View>
                                        <View style={styles.levelBlock}>
                                            <Text style={[styles.level, {color: item.mobileAppDashboard.textColor}]}>Уровень</Text>
                                            <Text style={styles.levelValue}>{item.customerMarkParameters.loyaltyLevel.name}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.stroke, styles.lastStroke]}>
                                    <Image source={eyeIcon} style={[styles.iconSize, styles.eyeIcon, {tintColor: item.mobileAppDashboard.mainColor}]} ></Image>
                                    <Image source={trashIcon} style={[styles.iconSize, styles.trashIcon ]}></Image>
                                    <View style={[styles.cardButton, {backgroundColor: item.mobileAppDashboard.backgroundColor}]}>
                                        <Text style={[styles.buttonText, {color: item.mobileAppDashboard.mainColor}]}> Подробнее</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                refreshControl={ // обновление страницы
                    <RefreshControl
                        refreshing={refreshing} // Передача состояния обновления
                        onRefresh={onRefresh} // Обработчик для обновления страницы
                    />
                }
            />
        </View>
    )
}

export default Cards;