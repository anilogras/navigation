import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const UserDetail = ({ route }) => {

  const data = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text>{data.id}</Text>
      <Text>{data.name}</Text>

      <Button
        title='Update the title'
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  )
}

export default UserDetail