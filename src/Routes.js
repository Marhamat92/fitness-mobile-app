import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome'
import MemberSign from './pages/MemberSign'
import MemberDetails from './pages/MemberDetails';
import UpdateMember from './pages/UpdateMember';

const Stack = createNativeStackNavigator();


function Router() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen 
     name="WelcomeScreen" 
     component={Welcome} />
     
     <Stack.Screen 
     name="MemberSignScreen" 
     component={MemberSign} 
     />
      <Stack.Screen 
     name="MemberDetailsScreen" 
     component={MemberDetails} 
     />
      <Stack.Screen 
     name="MemberUpdateScreen" 
     component={UpdateMember} 
     />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router