import { View, SafeAreaView} from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/text/planet.header";


export default function Home(){
  return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.black}}>
   <PlanetHeader/> 
   </SafeAreaView>
  )
}