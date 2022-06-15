import React,{useEffect,useState} from 'react'
import { View,Text,SafeAreaView, Alert } from 'react-native'
import axios from 'axios'
import Button from '../components/Button';
import tw from 'twrnc';
import Input from '../components/Input'
import { useFocusEffect } from '@react-navigation/native';




function UpdateMember({route,navigation}) {

  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userAge, setUserAge] = useState('');
  const [user, setUser] = useState();
  const [memberId, setMemberId] = useState('');


const {id} = route.params;
const [getMember, setGetMember] = useState('');
 const [updateUser,setUpdateUser] = useState('');


const onGetMember = (id) => {
  console.log(id,"ID is here")
  axios.get(`http://192.168.1.135:8088/member/member/get?member_id=${id}`)
  .then(res => {
    
     
    setGetMember(res.data)
    setUserName(res.data.member_name)
    setSurname(res.data.member_surname)
    setEmail(res.data.member_email)
    setUserCity(res.data.member_city)
    setUserAge(res.data.member_age)
  }
  ).catch(err => {
    console.log(err)
  })}

 
 const onUpdateMember = (id) => {
  axios.put(`http://192.168.1.135:8088/member/member/update?member_id=${id}`,
 { member_name:userName,
  member_surname:surname,
  member_email:email,
  member_city:userCity,
  member_age:userAge,
  id:id
}
  )
  .then(res => {
    console.log(res.data)
    setUpdateUser(res.data)
   navigation.navigate('MemberDetailsScreen',{updateUser})
   Alert.alert("MacFit+","Member updated successfully")
  }
  ).catch(err => {
    console.log(err)
  }
  )}

 

  useFocusEffect(
    React.useCallback(() => {
      onGetMember(id)
  }, [navigation])
  )

  


  return (
    <SafeAreaView style={tw`flex justify-center h-full`}>
     <Text style={tw`text-black font-bold text-2xl text-center`}>Update Member</Text>
    <Input value={userName} onChangeText={setUserName}  label="Member Name" placeholder="Enter Member Name"/>
    <Input value={surname} onChangeText={setSurname}  label="Member Surname" placeholder="Enter Member Surname"/>
    <Input value={userAge} onChangeText={setUserAge}  label="Member Age" placeholder="Enter Member Age"/>
    <Input value={email} onChangeText={setEmail}  label="Member Email" placeholder="Enter Member Email"/>
    <Input value={userCity} onChangeText={setUserCity} label="Member City" placeholder="Enter Member City"/>
    <View style={tw`mx-2  mt-3`}>
     <Button onPress={()=>onUpdateMember(id)} text="Save Changes"/> 
    </View>
  </SafeAreaView>
  )
}

export default UpdateMember