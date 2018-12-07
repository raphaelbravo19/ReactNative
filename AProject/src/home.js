
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
                        <TouchableOpacity style={styles.backButton}>
                            <ImageBackground source={Gradient} style={styles.grad}> 
                                <Text style={styles.textLogin}>Ingresar</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                        <Button title="Go to login" onPress={() => this.props.navigation.navigate('Login')}/>
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
    },
    backButton:{
        width: '100%',
        alignItems: 'center',
    },
    grad:{
        backgroundColor:'red',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    textLogin:{
        color:'white',
        fontSize: 20,
    },
    logo:{
        width: '100%',
        height:'60%'
    }
})
export default HomeScreen;