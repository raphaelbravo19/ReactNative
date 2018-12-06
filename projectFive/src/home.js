import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Modal} from 'react-native';
import CheckIcon from './assets/icons/check.png';
import NavBar from './nav';
import { TextInput } from 'react-native-gesture-handler';
import BlockIcon from './assets/icons/block.png';
class ModalApp extends Component{
    
    render(){
        return(
            <View style={styles.modal}></View>
        )
    }

};
class HomeScreen extends Component {
    static navigationOptions = {
        header: <NavBar/>,
        title: 'Home'
    }
    state = {
        modal: false,
        seg: 60,
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        stylebox: styles.box,
        stylebox2: styles.tabbox,
        check: false,
        good: false,
        cont: false,
    }

    handleModal = () => {
        this.setState({
          modal: this.state.modal? false:true,
          seg: 60,
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        stylebox: styles.box,
        stylebox2: styles.tabbox,
        check: false,
        good: false,
        cont:true
        })
      }
    componentDidMount(){
        this.myInterval = setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.modal) {
            
            if(this.state.cont){
                setTimeout(() => {
                    this.setState(prevState=>{return{
                        seg: (parseFloat(prevState.seg)-1).toString()
                    }}); 
                    if(this.state.seg<2) {
                        this.setState({
                            cont: false
                        }); 
                    }
                    if(this.state.code1!=''&&this.state.code2!=''&&this.state.code3!=''&&this.state.code4!=''){
                        if(this.state.code1=='9'&&this.state.code2=='9'&&this.state.code3=='9'&&this.state.code4=='9'){
                            this.setState({
                                cont: false,
                                good: true,
                                stylebox: styles.box2,
                                stylebox2: styles.tabbox2,
                            }); 
                        }else{
                            this.setState({
                                cont: false,
                                check: true,
                                stylebox: styles.box3,
                                stylebox2: styles.tabbox3,
                            }); 
                        }
                    }
                }, 1000);
            }if(!this.state.cont){
               
                setTimeout(()=>{this.setState({
                    modal:  false ,
                    code1: '',
                    code2: '',
                    code3: '',
                    code4: '',
                    seg: 60,
                    check: false,
                    good:false,
                });},2000);
                
            }
        } 
    }
    render(){
        const seg = this.state.seg < 60 ?  this.state.seg: 0;
            const add = seg < 10 ?  0: "";
            const min = this.state.seg/60 <1?0: this.state.seg/60;
        const { navigate } = this.props.navigation;
        
        var Temp =  ()=>{if(this.state.check){ return (<Text style={{fontSize:15, marginTop:0, color:'red'}} visible = {true}>Insert Code - Re-insert or resend</Text>)} else {return ( <Text style={{fontSize:15, marginTop:0, color:'red'}}> </Text>)}};
        var IconCheck =()=>{if(this.state.good){ return (<Image style={{marginLeft: 5,marginRight: -30,width:25, height:25}} source={CheckIcon}/>)} else {return null}};
        var BlockCheck =()=>{if(this.state.check){ return (<Image style={{marginLeft: 1,marginTop:18,marginRight: -21,width:20, height:20}} source={BlockIcon}/>)} else {return null}};
        
        return(
            <View style={styles.container}>
                
                <Button
                    title="Access"
                    onPress={this.handleModal}
                />
                <Modal  transparent={true} onRequestClose={this.handleModal} visible={this.state.modal} animationType='fade'>
                    <View style={styles.modal}>
                        <View style={styles.form}>
                            <View style={styles.exit}>
                                <Text onPress={this.handleModal} style={styles.xIcon}>X</Text>
                            </View>
                            <View style={styles.formul}>
                                <Text style={styles.descr}>We have sent a confirmation code to <Text style={{color:'#283D6F', fontWeight:'bold'}}>+51 963349964</Text>
                                </Text>
                                <Text style={{fontSize:35 , marginTop:15, fontWeight:'bold', lineHeight: 50 }}>0{ this.min}:{add}{seg}</Text>
                                <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{fontSize:18, marginTop:15}}>Insert Confirmation Code </Text> 
                                    <BlockCheck/>
                                </View>
                                
                                <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <View style={this.state.stylebox}>
                                
                                    <TextInput keyboardAppearance='dark' keyboardType="number-pad" name="code1" underlineColorAndroid='rgba(255, 255, 255, 0)'autoCorrect={false} onChangeText={(code1) => this.setState({code1})} maxLength={1} style={this.state.stylebox2} value = {this.state.code1}/>
                                    <TextInput keyboardAppearance='dark' keyboardType="number-pad" name="code2" underlineColorAndroid='rgba(255, 255, 255, 0)'autoCorrect={false} onChangeText={(code2) => this.setState({code2})} maxLength={1} style={this.state.stylebox2} value = {this.state.code2}/>
                                    <TextInput keyboardAppearance='dark' keyboardType="number-pad" name="code3" underlineColorAndroid='rgba(255, 255, 255, 0)'autoCorrect={false} onChangeText={(code3) => this.setState({code3})} maxLength={1} style={this.state.stylebox2} value = {this.state.code3}/>
                                    <TextInput keyboardAppearance='dark' keyboardType="number-pad" name="code4" underlineColorAndroid='rgba(255, 255, 255, 0)'autoCorrect={false} onChangeText={(code4) => this.setState({code4})} maxLength={1} style={styles.tabdefault} value = {this.state.code4}/>
                                </View>
                                <IconCheck/>
                                </View>
                                <Temp/> 
                                <Text style={styles.btnsend} >RESEND OTP</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            
        )
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    form:{
        width: '80%',
        height: 380,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    formul:{
        width: '100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    exit:{
        width: '100%',
        alignItems: 'flex-end',
        height:30,
        
    },
    xIcon:{
        fontSize:20,
        marginRight: 15,
        marginTop: 5,
        fontFamily: 'Lucida Console',
        fontWeight: 'bold',
    },
    descr:{
        fontSize: 19,
        width:'62%',
        textAlign:'center',
        fontWeight:'400',
        
        fontFamily: 'Lucida Console',
    },
    box:{
        backgroundColor:'white',
        borderColor: 'darkblue',
        borderWidth: 1,
        borderRadius: 5,
        width:'66%',
        flexDirection: 'row',
        marginTop:4,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    box2:{
        backgroundColor:'white',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        width:'66%',
        flexDirection: 'row',
        marginTop:4,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    
    box3:{
        backgroundColor:'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        width:'66%',
        flexDirection: 'row',
        marginTop:4,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    tabdefault:{
        textAlign:'center',
        width:'25%',
        fontSize:25,
        fontWeight: 'bold',
        height:50
    },
    tabbox2:{
        textAlign:'center',
        width:'25%',
        fontSize:25,
        borderColor: 'green',
        borderRightWidth: 1,
        fontWeight: 'bold',
        height:50
    },
    tabbox3:{
        textAlign:'center',
        width:'25%',
        fontSize:25,
        borderColor: 'red',
        borderRightWidth: 1,
        fontWeight: 'bold',
        height:50
    },
    tabbox:{
        textAlign:'center',
        width:'25%',
        fontSize:25,
        borderColor: 'darkblue',
        borderRightWidth: 1,
        fontWeight: 'bold',
        height:50
    },
    btnsend:{
        textAlign:'center',
        width:'60%',
        fontWeight: 'bold',
        fontSize:13,
        borderRadius: 25,
        color: '#6D6E6D',
        backgroundColor: '#C7CBD5',
        marginTop: 20,
        paddingVertical: 15,
        letterSpacing: 3,
        marginBottom: 20,
        
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
    }

})
export default HomeScreen