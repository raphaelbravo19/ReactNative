
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Navbar from './components/navbar';

class LoginScreen extends Component{
    static navigationOptions={
        header: <Navbar/>,
        title: 'Login'
    }
    render(){
        return(
            <View>
                
            </View>
        )
    }
}

export default LoginScreen