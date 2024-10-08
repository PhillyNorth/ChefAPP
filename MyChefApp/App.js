import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';
import MenuScreen from './screens/MenuScreen';
import FilterScreen from './screens/FilterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}