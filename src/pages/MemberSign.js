import React,{useState} from 'react'
import { SafeAreaView,Text,View,Alert } from 'react-native'
import Input from '../components/Input'
import tw from 'twrnc';
import Button from '../components/Button';
 

function MemberSign({navigation}) {

  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userAge, setUserAge] = useState('');

  const onSubmit = () => {
   if(!userName || !surname || !email || !userCity || !userAge){
      Alert.alert("MacFit+","Please fill all fields")
      return;
    }
    const user ={
      name: userName,
      surname: surname,
      email: email,
      city: userCity,
      age: userAge
    }
  navigation.navigate('MemberDetailsScreen',{user})
  }


  return (
   <SafeAreaView style={tw`flex justify-center h-full`}>
     <Text style={tw`text-black font-bold text-2xl text-center`}>Please Sign In</Text>
     <Input onChangeText={setUserName}  label="Member Name" placeholder="Enter Member Name"/>
     <Input onChangeText={setSurname}  label="Member Surname" placeholder="Enter Member Surname"/>
     <Input onChangeText={setUserAge}  label="Member Age" placeholder="Enter Member Age"/>
     <Input onChangeText={setEmail}  label="Member Email" placeholder="Enter Member Email"/>
     <Input onChangeText={setUserCity} label="Member City" placeholder="Enter Member City"/>
     <View style={tw`mx-2  mt-3`}>
     <Button onPress={onSubmit} text="Complete Register"/>
     </View>
   </SafeAreaView>
    )
}

export default MemberSign