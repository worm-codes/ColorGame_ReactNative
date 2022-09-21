/* her seferinde bu tarz basliycaz 4 adim
once import et, sonra uygulamani fonk olara belirle
gostericen icerigi return et, style icin fon ac,
style ayarla, daha sonra style={} diyip entegre et 
asagida oldugu gibi, en son da export ederek kullanima hazir hale getir.*/
import React from 'react';
/*{} icinde olanlar react native dan yuklemek istedigimiz kisimlar
hepsini yuklemek yerine sectiklerimizi yuklemesini sagliyoruz*/

import {Text,StyleSheet,View,Button,TouchableOpacity} from 'react-native';
/* view elementi diger elementleri gruplandirmada kullanilir div tagi gibi*/

/*uygulama fonkk*/
const ComponentsScreen=(props)=>{
  /* variable olarak tanimlayip asagida kullanabilir
  fakat nesne olarak tanimladiklarimizi text icinde kullanamyiz unutma!*/
  const word='Sea';
  const lastWords=<Text style={{color:'red', fontSize:45}}>Those are my last words... See you Again.</Text>



    /*view icinde elementleri koyarken yanlarina ; koyulmaz editor onu gostermek istedigin bir  text sayar ve
    text tagi icinde olmadigi icin error verir*/
    return (<View>
        <Text style={styles.textStyle}>This is a text message</Text>
         <Text style={{fontSize:30, color:'blue'}}>{word}</Text>
         {lastWords}
         <Button 
    title='->Next'
    onPress={()=>{
      props.navigation.navigate('List');

    }}/>
   
    </View>);
      /*style kismina style= {{fontSize:30}} da yazabilirsin her seferinde asagidai gibi olusturmakk zorunda degilsin*/
};

/*style fonk*/
const styles= StyleSheet.create({
    textStyle:{
        fontSize:30,
        color:'purple'
        
    }
});

/*part 4 export et*/
export default ComponentsScreen;