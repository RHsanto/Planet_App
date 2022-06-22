import { View, SafeAreaView, StyleSheet, FlatList, Pressable} from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/text/planet.header";
import { PLANET_LIST } from "../data/planet.data";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';

export default function Home({navigation}){
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
        <Pressable  onPress={()=>{
         navigation.navigate('Details',{planet:item})
        }}
        style={styles.item}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={[styles.circle, {backgroundColor:color}]} />
          <Text preset="h4" style={styles.itemName}>{name}</Text>
          </View>
         {/* here use details icons */}
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
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
    justifyContent:'space-between',
    padding:spacing[4]
  },
  itemName:{
    textTransform:"uppercase",
    marginLeft:spacing[5]
  },
  circle:{
    width:30,
    height: 30,
    borderRadius:15,
   
  },
  lists:{
    padding:spacing[7]
  },
  separator:{
   borderBottomColor:colors.white,
   borderWidth:0.5,
   padding:6
  }
})