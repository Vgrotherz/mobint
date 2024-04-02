import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native"; 
import { styles } from "./cardsStyles";
import fetchData from "../fetchData/fetchData"; // Импортируем функцию fetchData

const eyeIcon = require('../../res/img/eye_white.png');
const trashIcon = require('../../res/img/trash_white.png')

const Cards = ({ setIsLoading }) => {
    const [companies, setCompanies] = useState([]); // Состояние для хранения списка компаний

    useEffect(() => {
        // Вызываем функцию fetchData при загрузке компонента
        fetchData()
            .then(data => {
                // setIsLoading(true)
                // Получаем список компаний из данных API
                const { companies } = data;
                setCompanies(companies);
                // setIsLoading(false)
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Пустой массив зависимостей, чтобы выполнить запрос только один раз при монтировании компонента

    // Если компании еще не загружены, отображаем заглушку или индикатор загрузки
    if (companies.length === 0) {
        return <Text>Loading...</Text>; // Или другая заглушка для отображения процесса загрузки
    }

    return(
        <View style={styles.wholeCompanies}>
            {/* Маппим массив компаний и отображаем карточку для каждой */}
            {companies.map((company, index) => (
                <View key={index} style={styles.cardBlock}>
                    <View style={styles.container}>
                        <View style={styles.innerContiner}>
                            <View style={[styles.stroke, styles.firstStroke ]}>
                                {/* Используем данные из API */}
                                <Text style={styles.cardName}>{company.mobileAppDashboard.companyName}</Text>
                                <Image source={{ uri: company.mobileAppDashboard.logo }} style={styles.logoStyle}/>
                            </View>
                            <View style={styles.column}>
                                <View style={[styles.stroke, styles.scoreBlock]}>
                                    <Text style={styles.scoreNumber}>{company.customerMarkParameters.mark}</Text>
                                    <Text style={styles.scoreText}>баллов</Text>
                                </View>
                                <View style={styles.stroke}>
                                    <View style={styles.cashbackBlock}>
                                        <Text style={styles.cashback}>Кэшбэк</Text>
                                        <Text style={styles.cashbackValue}>{company.customerMarkParameters.loyaltyLevel.markToCash}%</Text>
                                    </View>
                                    <View style={styles.levelBlock}>
                                        <Text style={styles.level}>Уровень</Text>
                                        <Text style={styles.levelValue}>{company.customerMarkParameters.loyaltyLevel.name}</Text>
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
            ))}
        </View>
    )
}

export default Cards;