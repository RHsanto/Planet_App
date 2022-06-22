import { View, SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import Text from "./text";
import { spacing } from "../../theme/spacing";

export default function PlanetHeader(){
  return (
    <View style={styles.container}>
      <Text preset="h2">The Planet</Text>
   </View>
  )
}

const styles= StyleSheet.create({
container:{
  padding:spacing[10]
}
})