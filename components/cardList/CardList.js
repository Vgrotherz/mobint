// CardList.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import Cards from '../cards/Cards';
import Loader from '../loader/Loader';
import fetchData from '../utils/fetchData';
import store from '../utils/store';

import { styles } from './cardListStyles';

const CardList = observer(() => {
  useEffect(() => {
    fetchData()
      .then(data => {
        store.setCompanies(data.companies);
        store.setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        store.setIsLoading(false);
        store.setNoCompanies(true);
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

  const onRefresh = () => {
    store.setRefreshing(true);
    fetchData()
      .then(data => {
        store.setCompanies(data.companies);
        store.setRefreshing(false);
        store.setNoCompanies(data.companies.length === 0);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        store.setRefreshing(false);
      });
  };

  const { isLoading, currentCompanyIndex, companies, refreshing, noCompanies } = store;

  return (
    <View style={styles.container}>
      <View style={styles.manageBlock}>
        <Text style={styles.manageText}>Управление картами</Text>
      </View>
      <View style={styles.cardsBlock}>
        {isLoading 
        // || currentCompanyIndex < companies.length 
        ? (
          <>
            <View style={styles.loader}>
              <Loader />
            </View>
            <Text style={styles.loadCardsText}>Подгрузка компаний</Text>
          </>
        ) : noCompanies ? (
          <Text style={styles.noCompaniesText}>Нет компаний</Text>
        ) : (
          <Cards companies={companies} refreshing={refreshing} onRefresh={onRefresh} loadingIndex={currentCompanyIndex} />
        )}
      </View>
    </View>
  );
});

export default CardList;