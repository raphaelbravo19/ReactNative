import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: "Profile"
    }
    render(){
        return(
            <Text>This is profile</Text>
        )
    }
}

export default ProfileScreen
