import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal} from 'react-native';


class ModalComponent extends Component {
    state ={
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }
    render(){
        return(
            <View style={{width:'100%', marginTop: 20}}>
                <Button onPress={this.handleModal} title="Open Modal"></Button>
                <Modal 
                    visible={this.state.modal}
                    animationType={'fade'}
                    onShow={()=>{
                        alert('modal')
                    }}
                >
                    <View 
                        style={{marginTop: 20,
                        backgroundColor: 'red'}}>
                        <Text>My modal component</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 20}}>
                        <Button 
                            title="Close modal"
                            onPress={this.handleModal}
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}

export default ModalComponent