

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
  let trueColor=colors[rand]
  const [left,setLeft]=useState(Math.floor(colors.length/2))
  let answer = new Array(12).fill("");
   answer=answer.map(()=>trueColor);

 

  
 
  
   

    
 


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
    
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[1]} 

     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[1]="rgb(242,242,242)";
      setColors(changeTo);
     }}
      
     setAllColors={()=>{
       setColors(answer)
     }}
     />
   
    
    <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[2]} 
    changeColor={()=>{
       const changeTo=[...colors];
      changeTo[2]="rgb(242,242,242)";
      setColors(changeTo);
     
     }}
    
    
     setAllColors={()=>{
     
       setColors(answer)
     }}
     />
   
    </View>
  
    
   

   <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[3]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[3]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
     setAllColors={()=>{
      setColors(answer)
     }}
     />
   
     <Box trueColor={trueColor} number={left} left={()=>{ if(left!=0)setLeft(left-1)}} pickedColor={colors[4]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[4]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors(answer)
     }}
     />
   

     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[5]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[5]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
      
     setAllColors={()=>{
       setColors(answer)
     }}
     />
   
    
    
    </View>
     <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[6]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[6]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
    
     setAllColors={()=>{
       setColors(answer)
     }}
     />
   
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[7]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[7]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors(answer)
     }}
     />
   

     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[8]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[8]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
      
     setAllColors={()=>{
     setColors(answer)
     }}
     />
   
    
    
    </View>
     <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor}  number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[9]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[9]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }} 
     
     setAllColors={()=>{
       setColors(answer)
     }}
     />
   
     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[10]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[10]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors(answer)
     }}
     />
   

     <Box trueColor={trueColor} number={left} left={()=>{if(left!=0)setLeft(left-1)}} pickedColor={colors[11]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[11]="rgb(242,242,242)";
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
