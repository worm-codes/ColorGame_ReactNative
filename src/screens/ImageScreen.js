import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";


const ImageScreen = (props) => {
  return <View>
    <ImageDetail style={{fontSize:40,color:"red"}} title="forest" imageSource={require('../../assets/forest.jpg')}/>
    <ImageDetail style={{fontSize:30}} title="beach"imageSource={require('../../assets/beach.jpg')} />
    <ImageDetail style={{fontSize:20}} title="mountain" imageSource={require('../../assets/mountain.jpg')}/>


  
    <Button 
    title='->Next'
    onPress={()=>{
      props.navigation.navigate('Components');

    }}
    />
    
   

  </View>
  /* imagedeetail kismini tanimladik ve bu child oluyor, burada belirledigimiz sekilde kullaniyoruz ornek yukardaki gibi.
  Burada belirledigimiz her prop bizim yeni olusturdugumuz ve imagedetail icinde kullanabilip editleyebildigimiz
  turden oluyor, datalari bu sekilde ulastiriyoruz*/
  
};




const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50
  }
});

export default ImageScreen;
