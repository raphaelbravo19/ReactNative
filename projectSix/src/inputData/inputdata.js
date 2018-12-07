
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
        posts: [],
        selected: 'value1',
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
        this.componentWillMount()
       }
    componentWillMount(){
        this.props.getPosts().then(()=>{
            //console.log(this.props.Articles.posts)
            this.setState({
                posts:this.props.Articles.posts
                
            })
            this.setState({
                selected:this.state.posts[0].id
            })
            
            //console.log(this.state.posts)
            //console.log(this.state.posts[0].title)
        })
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
                    title={this.state.posts.length.toString()}
                    onPress={this.addPost}
                />
                {
                    this.state.posts.length>0 ?
                    <Picker 
                    style={{width:'60%',backgroundColor:'red'}}
                    selectedValue={this.state.selected}
                    onValueChange={(itemValue) => this.setState({selected: itemValue})}
                    >
                    {this.state.posts.map(item=>(
                        <Picker.Item label={item.title} value={item.id}/>))}
                    </Picker>:null

                    /*<Picker>
                        {
                            this.state.posts.map(item=>(
                            <Picker.Item label={item.title} value=""/>{}</Text>
                    ))
                        }
                    </Picker>*/
                    
                }
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
    console.log("entre")
    console.log(state)
    console.log("entre2")
    return{
        Articles:state.articles
    }
 }

 function mapDispatchToProps(dispatch){
     return bindActionCreators({addPost,getPosts, getPost,updatePost,deletePost},dispatch)

 }
export default connect(mapStateToProps,mapDispatchToProps)(InputData);