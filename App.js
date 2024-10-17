/*
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/splashScreen'
import HomeScreen from './components/homeScreen';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isShowSplash ? <SplashScreen /> : <HomeScreen />}
    </>
  );
}
*/

import Routes from './src/routes'

import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  );
}