import { View, SafeAreaView, StyleSheet, Pressable} from "react-native";
import React from "react";
import Text from "./text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function PlanetHeader({backBtn,title="THE PLANETS"}){
  const navigation =useNavigation()
  return (
    <View style={styles.container}>
      {backBtn && (
       <Pressable style={{marginRight:spacing[4],}}
        onPress={()=>{navigation.goBack()}}>
         <AntDesign style={{marginTop:spacing[2]}} name="left" size={24} color="white" />
       </Pressable>
      )}
      <Text preset="h2">{title}</Text>
   </View>
  )
}

const styles= StyleSheet.create({
container:{
  padding:spacing[8],
  borderBottomWidth:0.3,
  borderColor:colors.white,
  flexDirection:'row',
  alignItems:'center',

}
})