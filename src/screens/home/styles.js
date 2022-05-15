import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
mainContainer:{flex:1,},
floatingBtnStyle:{
  height:hp(9),
  width:hp(9),
  borderRadius:hp(9),
  alignItems:'center',
  justifyContent:'center',
  position:'absolute',
  bottom:hp(1),
  alignSelf:'center',
  backgroundColor:'#34aeff',
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10,
},
iconStyle:{
  height:hp(3),
  width:hp(3),
  resizeMode:'contain',
  tintColor:'white'
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `#00000040`,
  // marginTop: '50%',
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
headingText: {
  fontWeight: 'bold',
  fontSize: 18,
  marginBottom: 15,
},
modalText: {
  marginBottom: 15,
  // textAlign: "center"
},
cancelButton: {
  color: 'red',
},


imgContainer:{
  height:hp(14),
  width:"30%",
  backgroundColor:'#34aeff',
  margin:'1%'
},
imgContainerImg:{
  height:'100%',
  width:"100%",
  resizeMode:'cover'
}
});