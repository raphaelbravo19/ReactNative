import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Generate = (props) => (
    <TouchableWithoutFeedback
        //onLongPress={()=>{ alert('Touched')}}
        onPress={props.add}
    >
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
)
const styles = StyleSheet.create({
   generate:{
        padding: 10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFAAAA',
        marginTop: 20,
   },
  });

export default Generate;