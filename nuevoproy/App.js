/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, ActivityIndicator, Image} from 'react-native';
import Nav from './src/Nav/nav.js'
import Generate from './src/Generator/generate.js'
import ListItem from './src/Generator/listItem.js'
import Input from './src/Input/input'
import PickerComponent from './src/Picker/picker'
import Cars from './src/Assets/images/descarga.jpg'
import ModalComponent from './src/Modal/modal'

export default class App extends Component {
  state = {
    nameOfApp: "BetterRide",
    random: [20,13],
    loading: false
  }
  AddRandom = () => {
    const random = Math.floor(Math.random()*100)+1;
    this.setState( prevState=>{
      return{
        random:[...prevState.random,random]
      }
    })
  }
  Remove = (key) => {
    const newrandom = this.state.random.filter((item,index)=>{
      return key !== index
    })
    this.setState({
        random:newrandom
      })
    /*this.setState( prevState=>{
      
    })*/
  }
  render() {
    return (
      <View style={styles.container}>
      <Nav nameOfApp={this.state.nameOfApp}/>
      <ScrollView style={{width:'100%',
                  paddingHorizontal: 10,}}>
        <View style={styles.wrapper}>
          <Generate add={this.AddRandom}/>
          <ListItem remove={this.Remove} items={this.state.random}/>
          {/*<Input/>*/}
          {/*<PickerComponent></PickerComponent>
          <ActivityIndicator
            size="large"
            color="red"
            animating={this.state.loading}
          />*/}
          <ModalComponent />
        </View>
        {/*<Image 
            source={Cars}
            style={styles.cars}
            resizeMode="contain"
            onLoadEnd={()=>alert('loaded')}
        />*/}
      </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D46A6A',
  },
  wrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D46A6A',
  },
  cars: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});
