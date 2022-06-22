import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import React from 'react';
import PlanetHeader from "../components/text/planet.header";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";


export default function Details({navigation, route}){
  const planet = route.params.planet;
  const {name,description}= planet;

  return(
   <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <ScrollView>
    <View style={styles.detailsView}>
      <Text preset="h1" style={styles.detailsTitle}>{name}</Text>
      <Text style={styles.detailsDesc}>{description}</Text>
    </View>
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
    lineHeight:26
  }
})