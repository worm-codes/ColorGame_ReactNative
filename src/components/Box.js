import React from "react";
import {  StyleSheet,View,TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";



const Box = ({trueColor,left,number,pickedColor,setAllColors,changeColor}) => {
      

  return <View>
       <TouchableOpacity onPress={()=>{
           
          if(trueColor!=pickedColor && number!=1 && pickedColor!="rgb(242,242,242)"){
            changeColor()
            left()
          }
          else{
              if(number===1 && pickedColor!="rgb(242,242,242)" ){
                 left()
                 
              }
              if(pickedColor!="rgb(242,242,242)"){
              setAllColors()}


              
          }
          
       
    
     
     }} style={{width:100,height:100,marginLeft:30, backgroundColor:pickedColor}}
     
     
     />
    </View>
}



const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50
  }
});

export default Box;
