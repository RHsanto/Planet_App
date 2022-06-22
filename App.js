import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // here load font
  const[fontsLoaded]=useFonts({
  'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
  'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if(!fontsLoaded){
   return <Text>font is loading ....</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
