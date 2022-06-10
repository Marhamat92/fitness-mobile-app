import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import tw from 'twrnc';

function Button({text,onPress}) {


  return (
   <TouchableOpacity onPress={onPress} style={tw`bg-green-500 py-2 px-7 rounded-md`}>
        <Text style={tw`text-white font-bold text-lg text-center `} >{text}</Text>
   </TouchableOpacity>
  )
}

export default Button