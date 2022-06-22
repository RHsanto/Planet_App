import { View, SafeAreaView, StyleSheet, FlatList} from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/text/planet.header";
import { PLANET_LIST } from "../data/planet.data";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';

export default function Home(){
  return (
   <SafeAreaView style={styles.container}>
   <PlanetHeader/> 
   {/* here render all data */}
   <FlatList
   contentContainerStyle={styles.lists}
   data={PLANET_LIST}
   keyExtractor={(item)=>item.name}
   renderItem={({item,index})=>{
    const {name, color}= item
      return (
        <View style={styles.item}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={[styles.circle, {backgroundColor:color}]} />
          <Text preset="h4" style={styles.itemName}>{name}</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </View>
      )
   }}
   ItemSeparatorComponent={()=> <View style={styles.separator}/>}
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
    alignItems:'center',
    justifyContent:'space-between'
  },
  itemName:{
    textTransform:"uppercase",
    marginLeft:3
  },
  circle:{
    width:30,
    height: 30,
    borderRadius:15,
    margin:spacing[4]
  },
  lists:{
    padding:spacing[7]
  },
  separator:{
   borderBottomColor:colors.white,
   borderWidth:0.5,
   padding:5
  }
})