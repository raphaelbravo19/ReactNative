import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import Axios from 'axios';

import { connect } from 'react-redux';
import { registerUser, loginUser, getPosts, refreshToken } from '../Store/actions';
import { bindActionCreators } from 'redux';

class LoginUser extends Component {
    state = {
        email: '',
        password: '',
    }
    handleEmailInput = (email) => {
        this.setState({email})
    }
    handlePasswordInput = (password) => {
        this.setState({password})
    }
    addUser = () => {
        /*let element = {
            email: this.state.email,
            password: this.state.emapasswordil,
        }*/
        //this.props.registerUser(this.state);
        this.props.loginUser(this.state)
    }

    componentDidMount(){
        const refreshtoken = "AGK09AMD7gKUQ74IgtNMiDtKardKenzvlU8himCj4qncpoJbUrAVimCy_kwjFLLIqEtrb2fnTzXkRGwxRwiED4z-ZRedvPgIOWe2d_P_FRYV1pmf8U4UUJmloujdNr7i3SoTcOgFF8IWCsZ3AtLIlC59jVpPHnSgTtbgL2wIVguc52xPDKEOQVeDzoGP1-avE0gY0jodpm5Ecg5MWtlU9kKS4AeNaJcgieum7ilTSrvwnBOjP4YUXnI"
        this.props.refreshToken(refreshtoken);
        // this.props.getPosts()
        // // this.props.getPost('-LT867aZkSHOdvuXjaK6')
        // // //this.props.updatePost('-LT867aZkSHOdvuXjaK6')
        // // //this.props.deletePost(this.state.target)
        // // //"-LT867aZkSHOdvuXjaK6"
        // const TOKEN = "hello"
        // AsyncStorage.setItem('@projectSix:token',TOKEN)
        // .then(response =>{
        //     console.log('TOKEN ADDED')
        // })
        // AsyncStorage.getItem('@projectSix:token')
        // .then(response=> {console.log(response)})
    }
    render(){
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                    <Text>Email:</Text>
                    <TextInput
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={this.handleEmailInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Password:</Text>
                    <TextInput
                        value={this.state.password}
                        style={styles.input}
                        secureTextEntry= {true}
                        onChangeText={this.handlePasswordInput}
                    />
                </View>
                <Button
                    title="Add post"
                    onPress={this.addUser}
                />
            </View>
        )
    }
}
 const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputWrapper:{
        width: '80%',
        
    },
    input:{
        padding:5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 10
    }
 })


 function mapStateToProps(state){
     console.log(state)
     return{
         articles:state.articles
     }
 }

 function mapDispatchToProps(dispatch){
     return bindActionCreators({registerUser,loginUser,getPosts,refreshToken},dispatch)

 }
export default connect(mapStateToProps,mapDispatchToProps)(LoginUser);