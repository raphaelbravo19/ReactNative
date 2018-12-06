import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

const NavBar = () => {
    const appName = 'STAR WARS';
    return (
        <View style={styles.nav}>
            <Text style={styles.title}>{appName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    nav: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textShadowColor:'rgba(255,255,255,0.5)', 
        textShadowOffset:{width:2,height:2}
    }
})
export default NavBar;