import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
    Dimensions,
    TextInput,
    BackHandler,
  } from 'react-native';
var screen = Dimensions.get('window');

export default class PageLogin extends Component{
  // contructor(props){
  //   // super(props);
  //   this.state={
  //     email: '',
  //     password: ''
  //   }
  //   handleEmail = (text) => {
  //      this.setState({ email: text })
  //   }
  //   handlePassword = (text) => {
  //      this.setState({ password: text })
  //   }
  //   login = (email, pass) => {
  //      alert('email: ' + email + ' password: ' + pass)
  //   }
  // }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.vBack}>
            <TouchableOpacity onPress={() => this.goBack()}>
            <Image style={styles.imgBack} source={require('../image/arrowback.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.wraper}>
          <Text style={styles.dkText}>Đăng Ký</Text>
          <TouchableOpacity style={[styles.button, styles.button1]}>
          <Image style={styles.imgFG} source={require('../image/faceicon.png')}/>
          <Text style={styles.fText}>ĐĂNG NHẬP BẰNG FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.button2]}>
          <Image style={styles.imgFG} source={require('../image/ggicon.png')}/>
          <Text style={styles.gText}>KẾT NỐI VỚI GOOGLE</Text>
          </TouchableOpacity>
          <Text style={styles.nText}>Chúng tôi sẽ không đăng thông tin mà không {"\n"} có sự cho phép của bạn.</Text>
          <View style={styles.wpTetx}>
            <View style={styles.bfText}/>
            <Text style={styles.clText}>HOẶC</Text>
            <View style={styles.bfText}/>
          </View>
          <View style = {styles.wpInput}>
            <TextInput style = {[styles.input, styles.input1]}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9e9e9e"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {[styles.input, styles.input2]}
               underlineColorAndroid = "transparent"
               placeholder = "Mật khẩu"
               placeholderTextColor = "#9e9e9e"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText1}> ĐĂNG KÝ </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButtonDN}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText2}> Đăng nhập </Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    );
}
}


var styles = StyleSheet.create({
  container:{
    flex:1
  },
  vBack:{
    marginTop: "5%",
    marginLeft: "5%",
    height: "2%",
    width: "4%",
  },
  imgBack:{
    height: 16,
    width: 16,
  },
  wraper:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  dkText:{
    color: 'white',
    fontSize: 22,
    marginTop: '10%',
    marginBottom:'5%'
  },
  button:{
    justifyContent: 'center',
    width: '65%',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    padding: 7,
  },
  button1:{
    borderColor: '#1565c0',
    marginBottom:'2%'
  },
  button2:{
    borderColor: 'red',
  },
  fText:{
    color: '#1565c0',
    fontSize: 14,
  },
  gText:{
    color: 'red',
    fontSize: 14,
  },
  imgFG:{
    height: 16,
    width: 16,
    marginRight:'4%',
  },
  nText:{
    marginTop:"2%",
    color: '#757575',
    fontSize: 12,
    textAlign: 'center',
  },
  wpTetx:{
    flexDirection: 'row',
    marginTop:'5%',
    color: '#757575',
  },
  bfText:{
    borderBottomWidth:1,
    width:"50%",
    height:'50%',
    borderColor:'#757575',
  },
  clText:{
    color:"#757575"
  },
  wpInput: {
      paddingTop: 23,
      width:'65%',
   },
   input: {
    height: Platform.OS==='ios' ? 30 : 36,
    backgroundColor:'#757575',
    paddingLeft:'5%',
   },
   input1:{
     borderTopLeftRadius:7,
     borderTopRightRadius:7,
     borderBottomWidth:1,
     borderColor:'#9e9e9e'
   },
   input2:{
     borderBottomLeftRadius:7,
     borderBottomRightRadius:7,
   },
   submitButton: {
      backgroundColor: '#64dd17',
      padding: 10,
      marginTop:'5%',
      borderRadius: 5,
   },
   submitButtonDN: {
      // width:'30%',
      // backgroundColor: 'red',
      marginTop:'5%',
   },
   submitButtonText1:{
      color: 'white',
      textAlign: 'center',
   },
   submitButtonText2:{
      color: '#64dd17',
      textAlign: 'center',
   }
});
