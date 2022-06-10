import React from 'react';
import {TextInput, Text, View} from 'react-native';
import tw from 'twrnc';

function Input({label, value, onChangeText, placeholder, secureTextEntry}) {
  return (
    <View >
      <Text style={tw`ml-2 mb-1 mt-2 text-black`}>{label}</Text>
      <View style={tw`border mx-2  rounded-md`}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
}

export default Input;
