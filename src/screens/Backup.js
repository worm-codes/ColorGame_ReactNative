

/*Gerı donucem color game yapıcam thıs setstate anlamlarını bılmıyorum*/

import React,{useState} from "react";
import { Text, StyleSheet,View,TouchableOpacity,Alert,Button} from "react-native";
import { color } from "react-native-reanimated";
import Box from "../components/Box";


 let rand= Math.floor(Math.random()*12);
 





const ColorGame = (props) => {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Play Again", onPress: () => {
         
          
       ;} }
      ]
    );

 
  


  
 
  const [colors,setColors]=useState([randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor()]);
  let trueColor=colors[rand]
  
   //const [number,setNumber]=useState(Math.floor(colors.length/3))
   console.log("++++++++++++++++++++++++++++++++++")
   console.log(colors)
     console.log(colors[rand])
    console.log(trueColor)
       console.log("++-----------------------------------------+")


    
 
  

  return <View >
    <TouchableOpacity  onPress={()=>{
      rand= Math.floor(Math.random()*12)
      setColors([randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor(),randomColor()])
     trueColor=colors[rand]
     console.log("*********************************************************")
   console.log(colors)
     console.log(colors[rand])
    console.log(trueColor)
       console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
       
    
      

    }} >
      <Text style={styles.text}>Play Again</Text>
      </TouchableOpacity> 
      <Button  title="PRESS" onPress={createTwoButtonAlert}/>
         
     


   <View style={{flexDirection:"row"}}>
     
  
     <Box trueColor={trueColor}  pickedColor={colors[0]}  
      
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[0]="rgb(242,242,242)";
      setColors(changeTo);
     


     }}
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
    
     <Box trueColor={trueColor} pickedColor={colors[1]} 

     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[1]="rgb(242,242,242)";
      setColors(changeTo);
     }}
      
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
    
    <Box trueColor={trueColor} pickedColor={colors[2]} 
    changeColor={()=>{
       const changeTo=[...colors];
      changeTo[2]="rgb(242,242,242)";
      setColors(changeTo);
     
     }}
    
    
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
    </View>
  
    
   

   <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor} pickedColor={colors[3]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[3]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
     setAllColors={()=>{
      setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
     <Box trueColor={trueColor} pickedColor={colors[4]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[4]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   

     <Box trueColor={trueColor} pickedColor={colors[5]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[5]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
      
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
    
    
    </View>
     <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor} pickedColor={colors[6]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[6]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
    
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
     <Box trueColor={trueColor} pickedColor={colors[7]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[7]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   

     <Box trueColor={trueColor} pickedColor={colors[8]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[8]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
      
     setAllColors={()=>{
     setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
    
    
    </View>
     <View style={{flexDirection:"row",marginTop:20}}>
     <Box trueColor={trueColor} pickedColor={colors[9]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[9]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }} 
     
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
     <Box trueColor={trueColor} pickedColor={colors[10]} 
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[10]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
       setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   

     <Box trueColor={trueColor} pickedColor={colors[11]}
     changeColor={()=>{
       const changeTo=[...colors];
      changeTo[11]="rgb(242,242,242)";
      setColors(changeTo);
     
    

     }}
     
     setAllColors={()=>{
       setColors([trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,trueColor,
      trueColor,trueColor,trueColor,trueColor,trueColor])
     }}
     />
   
    
    
    </View>
    
   
  
  </View>
 
  
};


const randomColor=()=>{
   return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
  
}


const styles = StyleSheet.create({
  text: {
    
    color:'rgba(0,202,0,2)',
    fontSize: 50,
    marginLeft:70,
    marginBottom:100
  }
});

export default ColorGame;



///////////////////////////////////////////////////////////////////////////////////










import React from "react";
import {  StyleSheet,View,TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";



const Box = ({trueColor,pickedColor,setAllColors,changeColor}) => {
      

  return <View>
       <TouchableOpacity onPress={()=>{
           
          if(trueColor!=pickedColor ){
            changeColor()
          }
          else{
              setAllColors()
          }
          
       
    
     
     }} style={{width:100,height:100,marginLeft:30, backgroundColor:pickedColor}}
     title=""
     
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
