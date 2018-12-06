import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ListItem = (props) => (
    props.items.map((item,i)=>{
        return (
            <TouchableOpacity 
                style={styles.title}  
                key={i}
                onPress={()=>{props.remove(i)}}>
                <View >
                <Text style={styles.titleText}>{item}</Text>
                </View>
            </TouchableOpacity>)
        
    })
    
)

const styles = StyleSheet.create({
    title: {
        width: '100%',
        backgroundColor: '#FFAAAA',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
      },
      titleText: { 
        fontSize: 30,
        fontWeight: 'bold',
        color:'#fff'
      },
  });

export default ListItem;