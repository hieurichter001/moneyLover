import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image,
    Alert,
    TouchableOpacity,
    Dimensions,
    TextInput
  } from 'react-native';
import Modal from 'react-native-modalbox'
import PageLogin from './pageLogin.js';

var screen = Dimensions.get('window');

export default class ModalLogin extends Component{
  // contructor(props){
  //   super(props);
  // }
  showAddModal=()=>{
    this.refs.myModal.open();
  }
  render(){
    return(
      <Modal style={{
        // justifyContent: "center",
        backgroundColor: "#212121",
        borderRadius: Platform.OS==='ios' ? 10 :12,
        shadowRadius:10,
        width: screen.width,
        height:screen.height -50,
        }}
        ref={'myModal'}
        position= 'bottom'
        backdrop={true}
        // onClosed={()=>{
        //   Alert.alert('Closed modal!');
        // }}
        >
        <PageLogin/>
      </Modal>
    );
}
}
