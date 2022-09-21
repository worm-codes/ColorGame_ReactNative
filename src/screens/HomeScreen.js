import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";




/* button olarak kullanabilecegimiz 2 yontem var,
normal button ve touchlableopacity. 2 si ayni isi goruyor.
basic button cihaza gore basic bi button olusturuyor,
touchable opacity ise basic text ile olusuyor, aralarindaki farki asagida gorebilirsin*/
const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Welcome !!!
    if you wanna go next page click the button </Text> 
    <Button 
    title='->ımage'
    onPress={()=>{
      props.navigation.navigate('Image');

    }}
    />
   <Button 
    title='->components'
    onPress={()=>{
      props.navigation.navigate('Components');

    }}
    />

    <Button 
    title='->List'
    onPress={()=>{
      props.navigation.navigate('List');

    }}
    />

    <Button 
    title='->Counter'
    onPress={()=>{
      props.navigation.navigate('Counter');

    }}
    />
    <Button 
    title='->Color'
    onPress={()=>{
      props.navigation.navigate('Color');

    }}
    />
     <Button 
    title='->ColorGame'
    onPress={()=>{
      props.navigation.navigate('ColorGame');

    }}
    />

    <TouchableOpacity style={{marginTop:60}} onPressIn={()=>{
       props.navigation.navigate('Image');
    }}>
     

    </TouchableOpacity>

  </View>
  
};




const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50
  }
});

export default HomeScreen;
