

/*Gerı donucem color game yapıcam thıs setstate anlamlarını bılmıyorum*/

import React,{useState} from "react";
import { Text, StyleSheet,View,TouchableOpacity,Button} from "react-native";

import { setEnabled } from "react-native/Libraries/Performance/Systrace";
import Box from "../components/Box";


 let rand= Math.floor(Math.random()*12);
 




const ColorGame = (props) => {
   
 let begin = new Array(12).fill("");
 begin=begin.map(()=>randomColor())
 
  const [colors,setColors]=useState(begin);


 

  
 
  
   

    
 


  return <View >
    <TouchableOpacity  onPress={()=>{
      rand= Math.floor(Math.random()*12)
      begin=begin.map(()=>randomColor())
      setColors(begin)
     trueColor=colors[rand]
     answer=answer.map(()=>trueColor);
     setLeft(Math.floor(colors.length/2))
    
       
    
      

    }} > 
      
      <Text style={styles.text}> New GAME </Text>
      </TouchableOpacity> 
     <Text style={{fontSize:40,marginLeft:190}}>{left}</Text>
         
     


   <View style={{flexDirection:"row"}}>
     
  
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[0]}  
      
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[0]="rgb(242,242,242)";
      setColors(changeTo);
     


     }}
     setAllColors={()=>{
       setColors(answer)
     }}
     />
    
   
     
    
    
    </View>
    
   
  
  </View>
 
  
};


const randomColor=()=>{
   let selectedColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
   if(selectedColor!='rgb(242,242,242)'){
     return selectedColor
   }
   else{
      return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

   }
  
}


const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50,
    marginLeft:70,
    marginBottom:30
  }
});

export default ColorGame;
