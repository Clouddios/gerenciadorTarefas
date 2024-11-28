import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EditarTarefaScreen from './screens/EditarTarefaScreen';
import NovaTarefaScreen from './screens/NovaTarefaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditarTarefa" component={EditarTarefaScreen} />
        <Stack.Screen name="NovaTarefa" component={NovaTarefaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
