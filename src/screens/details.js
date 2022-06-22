import { SafeAreaView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import React from 'react';
import PlanetHeader from "../components/text/planet.header";
import { colors } from "../theme/colors";


export default function Details(){
  return(
   <SafeAreaView style={styles.container}>
    <PlanetHeader backBtn={true}/>
    <View>
      <Text>Hello Details</Text>
    </View>
   </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.black
  },
})