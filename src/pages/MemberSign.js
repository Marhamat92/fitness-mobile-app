import React,{useState} from 'react'
import { SafeAreaView,Text,View,Alert } from 'react-native'
import Input from '../components/Input'
import tw from 'twrnc';
import Button from '../components/Button';
import axios from 'axios';


const createMember =("http://192.168.1.135:8088/member/member/create")

function MemberSign({navigation}) {



  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userAge, setUserAge] = useState('');
  const [user, setUser] = useState();
  const [memberId, setMemberId] = useState('');

  const onCreateMember = () => {
axios.post(createMember,{
  member_name:userName,
  member_surname:surname,
  member_email:email,
  member_city:userCity,
  member_age:userAge
}).then(res=>{
  console.log(res)
  setUser(res.data)
  navigation.navigate('MemberDetailsScreen',{user})
  Alert.alert("MacFit+","Member created successfully")
}
).catch(err=>{
  console.log(err)
  Alert.alert("MacFit+","Member creation failed")
})}

      
  
  
  


  return (
   <SafeAreaView style={tw`flex justify-center h-full`}>
     <Text style={tw`text-black font-bold text-2xl text-center`}>Please Sign Up</Text>
     <Input onChangeText={setUserName}  label="Member Name" placeholder="Enter Member Name"/>
     <Input onChangeText={setSurname}  label="Member Surname" placeholder="Enter Member Surname"/>
     <Input onChangeText={setUserAge}  label="Member Age" placeholder="Enter Member Age"/>
     <Input onChangeText={setEmail}  label="Member Email" placeholder="Enter Member Email"/>
     <Input onChangeText={setUserCity} label="Member City" placeholder="Enter Member City"/>
     <View style={tw`mx-2  mt-3`}>
     <Button onPress={onCreateMember} text="Complete Register"/>
     </View>
   </SafeAreaView>
    )
}

export default MemberSign