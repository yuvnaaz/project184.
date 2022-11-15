import 'react';
import 'react-native-gesture-handler';
import Main from './main.js';
import Home from './home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName = "Home">
       <Stack.Screen name = "Home" component = {Home}></Stack.Screen>
       <Stack.Screen name = "Main" component = {Main}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  );
}