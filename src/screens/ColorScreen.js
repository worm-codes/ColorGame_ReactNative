import React,{useState} from "react";
import {  StyleSheet,View,Button,FlatList} from "react-native";

const ColorScreen = () => {
    /*colors bir liste ve bu yüzden boş liste ile initial ediyoruz.
    Set colors ile yeni renkler oluşturup atıcaz */
    const [colors,setColors]=useState([]);
   



   
  return <View>
     
      <FlatList
       keyExtractor={(item)=>item}
      data={colors}
      renderItem={({item})=>{
         
              return <View style={{height:100,width:100,backgroundColor:item}}/>
          
          
         

      }}
      />
       
    
    

  </View>
  
};


const randomRGB=()=>{
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}


export default ColorScreen;
