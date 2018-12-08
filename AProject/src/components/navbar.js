
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Background from '../images/bg.jpg';
import Logo from '../images/logo.png';

const NavBar = () =>{
    return(
        <View style={styles.nav}>
            <View style={{backgroundColor:'rgb(43, 43, 43)',flex:1, width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <Image source={Logo} style={styles.logo} resizeMode="center"/><Text style={styles.logoText}>aphael</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        width: '100%',
        height: 80,
        alignItems: 'center',
    },
    logo:{
        width:50,
        height:50
    },
    logoText:{
        color:'white',
        fontSize: 25,
        fontFamily: 'Ubuntu-BoldItalic'
    },
})

export default NavBar;