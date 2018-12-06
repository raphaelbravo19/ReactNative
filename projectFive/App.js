import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text , Button, Image, Modal, TextInput,ImageBackground , ScrollView} from 'react-native';
import HomeScreen from './src/home'
import ProfileScreen from './src/profile'
import HomeIcon from './src/assets/icons/home.png';
import ProfileIcon from './src/assets/icons/profile.png';
import NavBar from './src/nav';
import BackGround from './src/img/bg.jpg'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions:{
      title: 'Home',
      tabBarIcon: <Image source={HomeIcon}/>
    }
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    navigationOptions:{
      title: 'Profile',
      tabBarIcon: <Image source={ProfileIcon}/>
    }
  }
);

const ModalApp = createAppContainer(createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileStack
}));

/*class App extends Component{
  state = {
    modal: true,
    username: '',
    password: ''
  }
  handleLogin = () => {
    const enter = (this.state.username=='admin' && this.state.password=='1234');
    //if(enter){
    this.setState({
      modal: this.state.modal? false : true 
    })//}
  }
  handleModal = () => {
    this.setState({
      modal: this.state.modal? false : true 
    })
  }
  handleInput = (e)=>{
    const {name, value}= e.target;
    alert(name);
  }
  render(){
    return(
    <ImageBackground source={BackGround} style={{flex:1, alignItems: 'center'}}>
      
        <View style={{width:'100%'}}>
          <NavBar/>
        </View>
        
        <View style={{flex:1,width:'100%',alignItems: 'center',justifyContent:'center'}}>
          <View style={{width:'100%',alignItems: 'center'}}>
            <Text style={{color:'white',fontSize:40, fontWeight:'bold', fontStyle:'italic', textShadowColor:'#252525', textShadowOffset:{width:2,height:2}}}>- WELCOME -</Text>
          </View>
          <View style={{paddingVertical:20, width:'80%',alignItems: 'center',marginTop: 30, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <TextInput style={{paddingLeft: 20,width:'90%',fontSize:18,backgroundColor:'rgba(255,255,255,0.4)', color:'black', fontWeight:'bold'}} name="username" onChangeText={(username) => this.setState({username})} placeholder="Username" value={this.state.username}/>
            <TextInput style={{paddingLeft: 20,width:'90%',fontSize:18,backgroundColor:'rgba(255,255,255,0.4)', color:'black', fontWeight:'bold',marginTop: 10}} secureTextEntry={true} name="password" onChangeText={(password) => this.setState({password})} placeholder="Password" value={this.state.password}/>
          </View>
          <View style={{marginTop:30, marginBottom:20}}>
            <Text style={{paddingVertical: 10,paddingHorizontal:20,color:'white',fontSize:22, fontWeight:'bold', textShadowColor:'#252525',backgroundColor:'rgba(0,0,0,0.8)'}} onPress={this.handleLogin}>LOGIN</Text>
          </View>
          
          
          <Modal onRequestClose={this.handleModal} animationType='fade' visible={this.state.modal}>
            <ModalApp/>
          </Modal>
        </View>
    </ImageBackground>
    )
  }
}*/
class App extends Component{
 
  render(){
    return(
    <View>
      <HomeScreen></HomeScreen>
    </View>
    )
  }
}
export default ModalApp;