import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Button} from 'react-native';
import NavBar from './nav';
import ImagePicker from 'react-native-image-picker';

class ProfileScreen extends Component {
    static navigationOptions = {
        header: <NavBar/>,
        title: "Profile"
    }
    state = {
        avatar: []
    }
    addAvatar = ()=>{
        ImagePicker.showImagePicker(null,response => {
            
            this.setState(prevState=>{
                return{
                avatar: [...prevState.avatar,response.uri]
            }
            })
        })
    }
    render(){
        return(
            <View>
                <ScrollView horizontal={true} style={{width:'100%', height:500, backgroundColor: 'rgba(0,0,0,0.5)'}} contentContainerStyle={{alignItems:'center'}}>
                {
                   this.state.avatar.map((item,i)=>(
                        //<Text>{item}</Text>
                        <View key={i} style={styles.avatar}>
                            <Image source={{uri:item}} resizeMode="contain" style={styles.photo}/>
                        </View>
                    ))
                }
                </ScrollView>
            <Button title="Add your avatar" onPress={this.addAvatar}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    avatar: {
        width:200,
        height: 450,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    photo: {
        width:180,
        height: 430,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        
    },
   
})
export default ProfileScreen
