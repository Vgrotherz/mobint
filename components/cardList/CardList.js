// CardList.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react';

import Cards from '../cards/Cards';
import Loader from '../loader/Loader';
import fetchData from '../utils/fetchData';
import store from '../utils/store';

import { styles } from './cardListStyles';

const CardList = observer(() => {
  const { isLoading, companies, refreshing, noCompanies, isLoadingData, isLoadingMore } = store;

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
          // store.setNoCompanies(newCompanies.length === 0);
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
        // store.setNoCompanies(newCompanies.length === 0);
        store.setIsLoadingData(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        store.setRefreshing(false);
      });
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.manageBlock}>
        <Text style={styles.manageText}>Управление картами</Text>
      </View>
      <View style={styles.cardsBlock}>
        {(isLoading || isLoadingData ) && (
          <>
            <View style={styles.loader}>
              <Loader />
            </View>
            {/* <Text style={styles.loadCardsText}>Подгрузка компаний</Text> */}
          </>
        )}
        {!isLoadingData && (
          noCompanies ? (
            <Text style={styles.noCompaniesText}>Нет компаний</Text>
          ) : (
            <>
              <Cards companies={companies} refreshing={refreshing} onRefresh={onRefresh} loadMoreData={loadMoreData} isLoadingMore={isLoadingMore}/>
              {isLoadingMore? (
                <>
                  <Loader zIndex="3"/>
                </>
                ): null}
            </>
          )
        )}
      </View>
    </View>
  );
});

export default CardList;