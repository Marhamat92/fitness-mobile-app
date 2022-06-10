import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function Router() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={First} />
        <Stack.Screen name="Second Page" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router