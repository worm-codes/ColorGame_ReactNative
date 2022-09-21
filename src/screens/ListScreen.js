import React from 'react'
import { Text,View,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native'

const ListScreen=(props)=>{
    const Friends=[
        {name:'Friend #1'},
        {name:'Friend #2'},
        {name:'Friend #3'},
        {name:'Friend #4'},
        {name:'Friend #5'}
    ]
     /*listeyi react native ile olusturup goruntulerken listeden bir eleman sildigimizde
     react native listeyi bastan yapma ya calisir bazen de butun listeyi silebilir, bunu onlemek adina mutlakak
     'key' kullanmak zorundayiz. key string olmak zorunda*/

    /*Flatlist e vermemiz gerekenler data ve renderItem.
    data array oluyor,
    renderItem ise datayi nasil sergileyecegin bir fonk*/
     var num=0;
    return( <View>
       
    <FlatList data={Friends} 

             /*bu prop ise senin belirledigin bir sekilde key atiyor itemlere*/
           keyExtractor={(friend)=>{
            num++; 
            return friend.key=num.toString();  }}

          /*bu prob ise yatay yapiyor direkt*/
          // horizontal
         
         /*yatay scroll barini gostermeyi kapattik aynisini dikeyde de yapabiliriz*/
        // showsHorizontalScrollIndicator={false}
        
         showsVerticalScrollIndicator={false}
         
         /*renderItem kismina direkt element yazip kullanabiliriz fakat bu komple arrayi genel ele alir
         mesela element==={{item:{name:23232}, index=0}} gibi bizim istedigimiz dizinin kendisi
         bu yuzden es6 ozelligi olan {item} olarak kulannicaz*/
          renderItem={({item})=>{
              return <Text style={styles.textStyle}>{item.name}</Text>


          }}
    />
    <Button 
    title='->Next'
    onPress={()=>{
      props.navigation.navigate('Home');

    }}/>
    
      </View>)  };

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:40,
        marginLeft:100,
        fontSize:40,
        color:'red'

    }
});

export default ListScreen;