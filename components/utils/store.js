import { makeAutoObservable } from 'mobx';

class store {
  isLoad = true;
  companies = [];
  isLoading = true;
  currentCompanyIndex = 0;
  refreshing = false;
  noCompanies = false;
  isLoadingData = true;
  isLoadingMore = false;


  constructor() {
    makeAutoObservable(this);
  }

  setIsLoad(value) {
    this.isLoad = value;
  }

  setCompanies(companies) {
    this.companies = companies;
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  setCurrentCompanyIndex(index) {
    this.currentCompanyIndex = index;
  }

  setRefreshing(value) {
    this.refreshing = value;
  }

  setNoCompanies(value) {
    this.noCompanies = value;
  }

  setIsLoadingData(value) {
    this.isLoadingData = value;
  }

  setIsLoadingMore(value) {
    this.isLoadingMore = value;
  }
}

export default new store();