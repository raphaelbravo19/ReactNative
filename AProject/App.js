/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/home';
import LoginScreen from './src/login';

const App = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  }
);

export default createAppContainer(App);