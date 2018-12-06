import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    }
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View>
                <Text>This is home</Text>
                <Button
                    title= "See profile"
                    onPress= {()=>{
                        navigate('Profile')        
                    }}
                />
            </View>
            
        )
    }
}

export default HomeScreen