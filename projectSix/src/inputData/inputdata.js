
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';
import Axios from 'axios';

import { connect } from 'react-redux';
import { addPost, getPosts, getPost, updatePost, deletePost} from '../Store/actions';
import { bindActionCreators } from 'redux';

class InputData extends Component {
    state = {
        title: '',
        body: '',
    }
    handleTitleInput = (title) => {
        this.setState({title})
    }
    handleBodyInput = (body) => {
        this.setState({body})
    }
    addPost = () => {
        let element =  {title: this.state.title, body: this.state.body};
        this.props.addPost(element)
       }

    componentDidMount(){
        this.props.getPosts()
        this.props.getPost('-LT867aZkSHOdvuXjaK6')
        //this.props.updatePost('-LT867aZkSHOdvuXjaK6')
        //this.props.deletePost(this.state.target)
        //"-LT867aZkSHOdvuXjaK6"
    }
    render(){
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                    <Text>Title:</Text>
                    <TextInput
                        value={this.state.title}
                        style={styles.input}
                        onChangeText={this.handleTitleInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Body:</Text>
                    <TextInput
                        value={this.state.body}
                        style={styles.input}
                        onChangeText={this.handleBodyInput}
                    />
                </View>
                <Button
                    title="Add post"
                    onPress={this.addPost}
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
     return bindActionCreators({addPost,getPosts, getPost,updatePost,deletePost},dispatch)

 }
export default connect(mapStateToProps,mapDispatchToProps)(InputData);