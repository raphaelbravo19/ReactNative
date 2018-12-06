import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Nav = (props) => (
    <View style={styles.title1}>
        <Text style={styles.title1Text}>{props.nameOfApp}</Text>
    </View>
)

const styles = StyleSheet.create({
    title1: {
      backgroundColor: '#AA3939',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    title1Text: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'#fff'
    },
  });

export default Nav;