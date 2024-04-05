import React, { useState } from "react";
import { View, Image, Text, FlatList, RefreshControl, TouchableOpacity, Modal, Button } from "react-native"; 
import { styles } from "./cardsStyles";
import { observer } from "mobx-react";
import Loader from "../loader/Loader";

const eyeIcon = require('../../res/img/eye_white.png');
const trashIcon = require('../../res/img/trash_white.png')

const Cards = observer(({ companies, refreshing, onRefresh, loadMoreData, isLoadingMore, popupVisible, setPopupVisible }) => {
    // const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [selectedButton, setSelectedButton] = useState("");

    const handleButtonPress = (buttonName, companyId) => {
        setSelectedButton(buttonName);
        setSelectedCompanyId(companyId);
        setPopupVisible(true);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    const renderFooter = () => {
        if (isLoadingMore) {
            return <Loader />; 
        } else {
            return null; 
        }
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
                                <View style={[styles.stroke, styles.firstStroke, {borderBottomColor: item.mobileAppDashboard.textColor} ]}>
                                    <View style={styles.wrap}>
                                        <Text style={[styles.cardName, { color: item.mobileAppDashboard.highlightTextColor}]}>{item.mobileAppDashboard.companyName}</Text>
                                    </View>
                                    <Image source={{ uri: item.mobileAppDashboard.logo }} style={styles.logoStyle}/>
                                </View>
                                <View style={[styles.column, {borderBottomColor: item.mobileAppDashboard.textColor}]}>
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
                                    <View style={[styles.smallIcons, styles.stroke]}>
                                        <TouchableOpacity onPress={() => handleButtonPress("Показать", item.company.companyId)}>
                                            <Image source={eyeIcon} style={[styles.iconSize, styles.eyeIcon, {tintColor: item.mobileAppDashboard.mainColor}]} ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleButtonPress("Удалить", item.company.companyId)}>
                                            <Image source={trashIcon} style={[styles.iconSize, styles.trashIcon, {tintColor: item.mobileAppDashboard.accentColor} ]}></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={[styles.cardButton, {backgroundColor: item.mobileAppDashboard.backgroundColor}]} onPress={() => handleButtonPress("Подробнее", item.company.companyId)}>
                                        <View >
                                            <Text style={[styles.buttonText, {color: item.mobileAppDashboard.mainColor}]}> Подробнее</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} 
                    />
                }
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.1}
                onEndReached={loadMoreData}
            />
            <Modal
                visible={popupVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handlePopupClose}
            >
                <View style={styles.popupBackground}>
                    <View style={styles.popupContainer}>
                        <View style={[styles.popup, styles.popupTextBlock]}>
                            <Text style={styles.popupText}>{`Нажата кнопка "${selectedButton}".`}</Text>
                            <Text style={styles.popupText}>id компании: ${selectedCompanyId}`</Text>
                            <View style={styles.popButtonBlock}>
                                <Button style={styles.closeButton} title="Закрыть" onPress={handlePopupClose} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
})

export default Cards;