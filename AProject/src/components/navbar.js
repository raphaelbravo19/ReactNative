
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


const NavBar = () =>{
    return(
        <View style={styles.nav}>
            <Text>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        width: '100%',
        backgroundColor: 'red',
        height: 50,
        alignItems: 'center',
    }
})

export default NavBar;