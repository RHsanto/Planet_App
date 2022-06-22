import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import React from 'react';
import PlanetHeader from "../components/text/planet.header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const PlanetSection =({title,value})=>{
  return(
    <View style={styles.planetSection}>
      <Text preset="small" style={{textTransform:'uppercase'}}>{title}</Text>
      <Text preset="h3">{value}</Text>
    </View>
  )
}

export default function Details({navigation, route}){
  const planet = route.params.planet;
  const {name,description,rotationTime,revolutionTime,radius,avgTemp}= planet;

  return(
   <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <ScrollView>
    <View style={styles.detailsView}>
      <Text preset="h1" style={styles.detailsTitle}>{name}</Text>
      <Text style={styles.detailsDesc}>{description}</Text>
      <Pressable style={styles.source}>
        <Text>Source:</Text>
        <Text preset="h4" style={styles.wikipedia}>Wikipedia</Text>
      </Pressable>

    </View>
      <PlanetSection title='rotationTime' value={rotationTime} />
      <PlanetSection title='revolutionTime' value={revolutionTime} />
      <PlanetSection title='radius' value={radius} />
      <PlanetSection title='avgTemp' value={avgTemp} />
    </ScrollView>
   </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.black
  },
  detailsView:{
    margin:spacing[5],
    padding:spacing[5],
    alignItems:'center',
 
  },
  detailsTitle:{
    textTransform:'uppercase'
  },
  detailsDesc:{
    textAlign:'center',
    marginTop:spacing[3],
    lineHeight:28,
    
  },
  source:{
    flexDirection:'row',
    marginTop:spacing[8],
    alignItems:'center'
  },
  wikipedia:{
    textDecorationLine:'underline',
    fontWeight:'bold',
    marginTop:5,
    marginLeft:5
  },
  planetSection:{
    flexDirection:'row',
    alignItems:'baseline',
    justifyContent:'space-between',
    paddingHorizontal:spacing[5],
    paddingVertical:spacing[4],
    borderWidth:1,
    borderColor:colors.grey,
    marginHorizontal:spacing[6],
    marginBottom:spacing[4]
  }
})