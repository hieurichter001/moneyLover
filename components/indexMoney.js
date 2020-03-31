import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity
  } from 'react-native';
import Swiper from 'react-native-swiper';
import ModalLogin from './modalLogin.js';
export default class ViewIndex extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titleText}>Language</Text>
            <Swiper dotColor="#43a047" activeDotColor="#558b2f" >
              <View style={styles.slide}>
              <Image style={styles.image} source={require('../image/image1.png')} />
                <Text style={styles.textSlideTitle}>Quản lý tài chính hiệu quả</Text>
                <Text style={styles.textSlide}>Mẹo đầu tiên: Đăng nhập để truy cập vào dữ liệu của bạn {"\n"}trên tất cả các thiết bị.</Text>
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../image/image2.png')} />
                <Text style={styles.textSlide}>Quản lý chi tiêu cá nhân và hoàn thiện mục tiêu{"\n"} tài chính.</Text>
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../image/image3.png')} />
                <Text style={styles.textSlide}>Dễ dàng truy cập dữ liệu trên nhiều{"\n"} thiết bị.</Text>
              </View>
              <View style={styles.slide}>
              <Image style={styles.image} source={require('../image/image4.png')} />
                <Text style={styles.textSlide}>Kiểm soát từng khoản thu chi với hệ thống báo cáo {"\n"} chi tiết.</Text>
              </View>
              <View style={styles.slide}>
              <Image style={styles.image} source={require('../image/image5.png')} />
                <Text style={styles.textSlide}>Lên kế hoạch tài chính thông minh và từng bước tiết {"\n"} kiệm dể thực hiện hóa ước mơ</Text>
              </View>
            </Swiper>
            <View style={styles.wrapperButton}>
            <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => {this.refs.addModal.showAddModal();}}>
                   <Text style={{ color: '#558b2f' }}>LẦN ĐẦU SỬ DỤNG ỨNG DỤNG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => {this.refs.addModal.showAddModal();}}>
                   <Text style={{ color: '#FFFFFF' }}>BẠN ĐÃ TỪNG SỬ DỤNG</Text>
            </TouchableOpacity>
            </View>
            <ModalLogin ref={'addModal'}>
            </ModalLogin>
        </View>
    );
}
}


var styles = StyleSheet.create({
  coloroo:{
    color: '#558b2f'
  },
  titleText: {
    textAlign: "right",
    marginTop: Platform.OS==='ios' ? "10%" :"4%",
    marginRight:"5%",
    color:"white",
    fontSize: 13,
  },
  container:{
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor: '#2e7d32',
    flex: 1,
  },
  wrapperButton: {
    alignItems: 'center',
    marginBottom: "10%"
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e7d32'
  },
  image:{
    width: 100, height: 100,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  textSlideTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textSlide: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    marginTop:10
  },
    button:{
      width: "80%",
      fontSize:13,
      alignItems: 'center',
      padding: 11,
      borderRadius: 5
    },
    button1:{
      backgroundColor: '#FFFFFF',
      // color:"#558b2f"
    },
    button2:{
      backgroundColor: '#388e3c',
      marginTop:'2%'
    }
});
