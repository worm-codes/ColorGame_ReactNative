import React from "react";
import { Text, StyleSheet,View,Image } from "react-native";


const ImageDetail = (props) => {
  return  <View>
    <Text style={props.style} >My name is {props.title} </Text> 
    <Image source={props.imageSource} />
    
    

  </View> 
    /* boyle de gosterilebilir yukarda ise proplar ile gosteriliyor <Image source={require('../../assets/forest.jpg')}/>*/ 
};




const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50
  }
});

export default ImageDetail;
