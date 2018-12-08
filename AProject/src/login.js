
import React, {Component} from 'react';
import {StyleSheet, View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Navbar from './components/navbar';
import Background from './images/bg2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component{
    static navigationOptions={
        header: <Navbar/>,
        title: 'Login'
    }
    render(){
        return(
            <ImageBackground source={Background} style={styles.container}>
                <Text style={styles.textLogin}>- Sign in -</Text>
                <View style={styles.form}>
                    <View style={styles.formItem}>
                        <Icon name="address-card" size={30} color="white"/>
                        <TextInput style={styles.input} underlineColorAndroid="white" placeholder="Put here"></TextInput>
                    </View>
                    <View style={styles.formItem}>
                        <Icon name="at" size={30} style={{marginHorizontal:5}}color="white"/>
                        <TextInput style={styles.input} underlineColorAndroid="white" placeholder="Put here"></TextInput>
                    </View>
                    <TouchableOpacity>
                            <Text style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Login')}>INGRESAR</Text>      
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        flex:1,
        paddingLeft: 15,
        marginLeft: 10,
        fontSize: 23,
        color: 'white',
        fontFamily: 'Ubuntu-Regular'
    },
    textLogin:{
        
        fontSize: 40,
        fontFamily: 'Arvo-Bold',
        color:'white'
    },
    form:{
        width: '65%',
        
        marginTop: 20
    },
    btnLogin:{
        backgroundColor:'#777677',
        color:'white',
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 20,
        fontFamily: 'Ubuntu-Bold',
    },
    formItem:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 10,
    }
    
})
export default LoginScreen