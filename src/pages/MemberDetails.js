import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Alert, FlatList} from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';

const memberList = 'http://192.168.1.135:8088/member/member/get/list';

function MemberDetails({route, navigation}) {
  const [allUsers, setAllUsers] = useState([]);

  const onDeleteUser = id => {
    //delete user by id
    console.log(id);
    axios
      .delete(`http://192.168.1.135:8088/member/member/delete?member_id=${id}`)
      .then(res => {
        console.log(res);
        Alert.alert('MacFit+', 'Member deleted successfully');
        setAllUsers(allUsers.filter(user => user.id !== id));
      })
      .catch(err => {
        console.log(err);
        Alert.alert('MacFit+', 'Member deletion failed');
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(memberList)
        .then(res => {
          setAllUsers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [navigation]),
  );

  return (
    <SafeAreaView style={tw`flex justify-center h-full `}>
      <Text style={tw`text-green-500 font-bold text-4xl text-center`}>
        Member Details
      </Text>

      <FlatList
        data={allUsers}
        renderItem={({item}) => {
          return (
            <View
              style={tw` border mx-2 pl-2 py-2 my-2 flex-row justify-between items-center`}>
              <View>
                <Text style={tw`text-black font-bold text-2xl `}>
                  <Text style={tw`text-orange-500`}>Name:</Text>{' '}
                  {item.member_name}
                </Text>
                <Text style={tw`text-black font-bold text-2xl `}>
                  <Text style={tw`text-orange-500`}>Surname:</Text>{' '}
                  {item.member_surname}
                </Text>
                <Text style={tw`text-black font-bold text-2xl `}>
                  <Text style={tw`text-orange-500`}>Age:</Text>{' '}
                  {item.member_age}
                </Text>
                <Text style={tw`text-black font-bold text-2xl `}>
                  <Text style={tw`text-orange-500`}>Email:</Text>{' '}
                  {item.member_email}
                </Text>
                <Text style={tw`text-black font-bold text-2xl`}>
                  <Text style={tw`text-orange-500`}>City:</Text>{' '}
                  {item.member_city}
                </Text>
              </View>
              <View style={tw`flex-col`}>
                <View style={tw` bg-red-500 py-2 px-2 mr-1`}>
                  <Text
                    style={tw`text-white font-bold`}
                    onPress={() => onDeleteUser(item.id)}>
                    DELETE
                  </Text>
                </View>
                <View style={tw` bg-green-500 py-2 px-2 mr-1`}>
                  <Text
                    style={tw`text-white font-bold text-center`}
                    onPress={() =>
                      navigation.navigate('MemberUpdateScreen', {id: item.id})
                    }>
                    EDIT
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default MemberDetails;
