import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Text from './src/components/text/text';
import { View } from 'react-native';
import Details from './src/screens/details';



const Stack = createNativeStackNavigator();

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
    <>
    <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Details" component={Details} />
       </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

