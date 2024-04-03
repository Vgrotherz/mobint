import { Dimensions } from "react-native";

export const vw = Dimensions.get('window').width/100;
export const screenWidth = Dimensions.get('window').width;

// sizes
export const img_large = screenWidth * 0.5;

export const text0 = 6*vw;
export const text1 = 6*vw;
export const text2 = 4*vw;
export const text3 = 2*vw;

export const margin1 = screenWidth * 0.04;
export const margin2 = screenWidth * 0.02;
export const margin3 = screenWidth * 0.2;

export const sizePreloader = screenWidth * 0.2;

export const logoSize = screenWidth * 0.15;
export const iconSize = screenWidth * 0.08; 


// colors
export let cardBackgroundColor = '#ffffff'; // white
export let highlightTextColor = '#1a1a1a'; // black
export let textColor = '#efefef'; // light grey
export let mainColor = '#2688eb'; //blue
export let accentColor = '#ff3044'; //red
export let backgroundColor = '#949494'; //dark grey



