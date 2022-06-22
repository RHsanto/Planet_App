import { View, SafeAreaView, StyleSheet, FlatList} from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/text/planet.header";
import { PLANET_LIST } from "../data/planet.data";
import { spacing } from "../theme/spacing";


export default function Home(){
  return (
   <SafeAreaView style={styles.container}>
   <PlanetHeader/> 
   <FlatList
   contentContainerStyle={styles.lists}
   data={PLANET_LIST}
   keyExtractor={(item)=>item.name}
   renderItem={({item,index})=>{
    const {name, color}= item
      return (
        <View style={styles.item}>
          <View style={[styles.circle, {backgroundColor:color}]}></View>
          <Text preset="h3" style={styles.itemName}>{name}</Text>
        </View>
      )
   }}
   />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.black
  },
  item:{
    flexDirection:'row',
    alignItems:'center'
  },
  itemName:{
    
  },
  circle:{
    width:30,
    height: 30,
    borderRadius:15,
    margin:spacing[5]
  },
  lists:{
    padding:spacing[7]
  }
})