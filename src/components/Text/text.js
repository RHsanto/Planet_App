import { View ,Text as RNtext, StyleSheet} from "react-native";
import React from "react";
import { presets } from "./text.presets";

export default function Text({children, preset="default",style}){

  const textStyles = StyleSheet.compose(presets[preset],style)
  
  return(
   <RNtext style={textStyles}>{children}</RNtext>
  )
}