import React from 'react'
import { SafeAreaView,Text } from 'react-native'
import tw from 'twrnc';
import Button from '../components/Button';



function Welcome(props) {

const goToMemberSign = () => {
  props.navigation.navigate('MemberSignScreen')
}


  return (
    <SafeAreaView style={tw`items-center justify-center bg-orange-300 h-full flex`}>
        <Text style={tw`text-white font-bold text-3xl  `} >Mac+</Text>
        <Button onPress={goToMemberSign}  text="REGISTER" />
    </SafeAreaView>
  )
}

export default Welcome