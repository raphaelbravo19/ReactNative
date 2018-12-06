import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

class Input extends Component {
    state = {
        myInput:"",
        users:['John','James']
    }
    onChangeInput = (value) =>{
        const temp = value;
        this.setState({
            myInput: temp
        })
    }
    onAddUser = () => {
        this.setState(prevState =>{
            return {
                myInput:'',
                users:[...prevState.users,prevState.myInput]
            }
        })
    }
    render(){
        return(
            <View style={styles.inputWrapper}>
                <TextInput 
                    value={this.state.myInput} 
                    style={styles.input} 
                    onChangeText={this.onChangeInput}
                />
                <Button onPress={this.onAddUser} title="Add user" />
                <View style={styles.viewUsers}>
                {
                    this.state.users.map(item => (
                        <Text style={styles.users} key={item}>{item}</Text>
                    ))
                }    
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper:{
        width: '100%',
    },
    input:{
        width:'100%',
        backgroundColor:'#801515',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        padding:10,
        color: '#fff'
    },
    viewUsers:{
        width: '100%',
        marginTop:10,
        marginBottom:30,
    },
    users:{
        textAlign: 'center',
        backgroundColor: '#FFAAAA',
        fontSize: 15,
        padding:5,
        fontWeight: 'bold',
        marginBottom:5,
        marginHorizontal: '30%',
    }
  });

export default Input;