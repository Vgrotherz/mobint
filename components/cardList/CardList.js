import React, { useEffect,useState } from 'react';
import { View, Text, Button, Modal, Image } from 'react-native';
import { observer } from 'mobx-react';


import Cards from '../cards/Cards';
import Loader from '../loader/Loader';
import fetchData from '../utils/fetchData';
import store from '../utils/store';

import { styles } from './cardListStyles';

const errorIcon = require('../../res/img/exclamation_white.png')

const CardList = observer(() => {
  const [ popupVisible, setPopupVisible ] = useState(false);
  const [ errorPopupVisible, setErrorPopupVisible ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  const { isLoading, companies, refreshing, noCompanies, isLoadingData, isLoadingMore} = store;



  useEffect(() => {
    fetchData(0, 5)
      .then(data => {
        store.setCompanies(data.companies);
        store.setIsLoading(false);
        store.setIsLoadingData(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        store.setIsLoading(false);
        store.setNoCompanies(true);
        store.setIsLoadingData(false);
        
        let message = 'Произошла неизвестная ошибка'; // по умолчанию message
        if (error.response) {
          switch (error.response.status) {
            case 401:
              message = 'Ошибка авторизации';
              break;
            case 400:
              message = error.errorData && error.errorData.message ? error.errorData.message : 'Неверный запрос';
              break;
            case 500:
              message = 'Все упало';
              break;
            default:
              break; // по умолчанию message
          }
        }
        setErrorMessage(message);
        setErrorPopupVisible(true);
      });
  }, []);

  useEffect(() => {
    const { isLoading, currentCompanyIndex, companies } = store;
    if (!isLoading && currentCompanyIndex < companies.length) {
      const timer = setTimeout(() => {
        store.setCurrentCompanyIndex(prevIndex => prevIndex + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadMoreData = (setIsLoadingMore) => {
    if (!isLoadingMore) {
      store.setIsLoadingMore(true);
      const offset = store.companies.length;
      fetchData(offset, 5)
        .then(data => {
          const newCompanies = [...store.companies, ...data.companies];
          store.setCompanies(newCompanies);
          store.setIsLoadingMore(false);
          store.setIsLoadingData(false);
          store.setIsLoadingMore(false)
        })
        .catch(error => {
          console.error('Error fetching more data:', error);
          store.setIsLoadingMore(false);
        });
    }
  };

  const onRefresh = (setCompanies) => {
    store.setRefreshing(true);
    fetchData(0, 5)
      .then(data => {
        store.setCompanies(data.companies);
        store.setRefreshing(false);
        store.setIsLoadingData(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        store.setRefreshing(false);
      });
  };

  return (
    
    <View style={styles.container} >
      <View style={styles.manageBlock}>
        <Text style={styles.manageText}>Управление картами</Text>
      </View>
      <View style={styles.cardsBlock}>
        {(isLoading || isLoadingData ) && (
          <>
            <View style={styles.loader}>
              <Loader />
            </View>
          </>
        )}
        {!isLoadingData && (
          noCompanies ? (
            <Text style={styles.noCompaniesText}>Нет компаний</Text>
          ) : (
            <>
              <Cards companies={companies} refreshing={refreshing} onRefresh={onRefresh} loadMoreData={loadMoreData} isLoadingMore={isLoadingMore} popupVisible={popupVisible} setPopupVisible={setPopupVisible}/>
              {isLoadingMore? (
                <>
                  <Loader zIndex="3"/>
                </>
                ): null}
            </>
          )
        )}
      </View>
      <Modal
        visible={errorPopupVisible}
        transparent={true}
        onRequestClose={() => setErrorPopupVisible(false)}
      >
        <View style={styles.popupBackground}>
          <View style={styles.popupContainer}>
            <View style={[styles.popup, styles.popupTextBlock]}>
              <Image source={errorIcon} style={styles.errorIcon}></Image>
              <Text style={styles.popupText}>{errorMessage}</Text>
              <View style={styles.popButtonBlock}>
                <Button style={styles.closeButton} title="Закрыть" onPress={() => setErrorPopupVisible(false)} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default CardList;