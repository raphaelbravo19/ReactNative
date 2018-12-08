
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Navbar from './components/navbar';
import Background from './images/bg.jpg';
import Logo from './images/logo.png';
import Gradient from './images/gradient.jpg';


class HomeScreen extends Component{
    static navigationOptions={
       header:null
    }
    render(){
        return(
                <ImageBackground source={Background} style={styles.back}>
                    <View style={styles.containerImage}>
                        <Image source={Logo} style={styles.logo} resizeMode="center"/>
                    </View>
                    <View style={styles.containerActions}>
                        <TouchableOpacity>
                            <Text style={styles.textLogin} onPress={() => this.props.navigation.navigate('Login')}>INGRESAR</Text>      
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Text style={[styles.textLogin,{marginTop:10}]}  onPress={() => this.props.navigation.navigate('Register')}>REGISTRATE</Text>      
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                
        )
    }
}

const styles = StyleSheet.create({
    back:{
        flex:1,
    },
    containerImage:{
        width:'100%',
        height:360,
        justifyContent: 'center',
    },
    containerActions:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin:{
        backgroundColor:'#777677',
        color:'white',
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 20,
        fontFamily: 'Ubuntu-Bold',
    },
    logo:{
        width: '100%',
        height:'60%'
    }
})
export default HomeScreen;
