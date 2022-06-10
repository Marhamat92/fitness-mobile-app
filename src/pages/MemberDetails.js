import React from 'react'
import { SafeAreaView,Text,View,Alert } from 'react-native'
import tw from 'twrnc';

function MemberDetails({route}) {

    console.log(route)

  return (
    <SafeAreaView style={tw`flex justify-center h-full`}>
        <Text style={tw`text-green-500 font-bold text-4xl text-center`}>Member Details</Text>
        <Text style={tw`text-black font-bold text-2xl `}>Name: {route.params.user.name}</Text>
        <Text style={tw`text-black font-bold text-2xl `}>Surname: {route.params.user.surname}</Text>
        <Text style={tw`text-black font-bold text-2xl `}>Age: {route.params.user.age}</Text>
        <Text style={tw`text-black font-bold text-2xl `}>Email: {route.params.user.email}</Text>
        <Text style={tw`text-black font-bold text-2xl`}>City: {route.params.user.city}</Text>
    </SafeAreaView>
  )
}

export default MemberDetails