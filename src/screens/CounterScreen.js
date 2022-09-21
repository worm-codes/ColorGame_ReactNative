import React,{useState} from "react";
import { Text, StyleSheet,View,Button } from "react-native";




/* button olarak kullanabilecegimiz 2 yontem var,
normal button ve touchlableopacity. 2 si ayni isi goruyor.
basic button cihaza gore basic bi button olusturuyor,
touchable opacity ise basic text ile olusuyor, aralarindaki farki asagida gorebilirsin*/
const CounterScreen = () => {
   /*bunu yapma boyle calısmıyor bu degısken guncellendıgınde uygulamada goruntus degısmıyor
   bunlar ıcın state kullanıyoruz
   
   let counter=0*/
   /* burda counter degıskenını 0 a esıtlıyoruz usestate ıle
   yanındakı setcounter da counter degıskenını degıstırmemıze
   yarıyor degerı degıstırırken mutlaka set ıle yapmalıyız
   dıger turlu uygulamada guncellenmez*/
   const [counter,setCounter]=useState(0);

  return <View>
   <Button
   title="increase"
   onPress={()=>{
       setCounter(counter+1);
   }}
   />
   <Button
   title="decrease"
   onPress={()=>{
       setCounter(counter-1)
   }}
   />
   <Text style={styles.text}>{counter}</Text>
    

  </View>
  
};




const styles = StyleSheet.create({
  text: {
    
    marginLeft:180,
    fontSize: 50
  }
});

export default CounterScreen;
