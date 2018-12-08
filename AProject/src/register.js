
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Navbar from './components/navbar';

class RegisterScreen extends Component{
    static navigationOptions={
        header: <Navbar/>,
        title: 'Register'
    }
    render(){
        return(
            <View>
                <Text>Register</Text>
            </View>
        )
    }
}

export default RegisterScreen