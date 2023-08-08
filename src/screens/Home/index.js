
import React from "react";
import { View, Text, Button , FlatList } from "react-native";




function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screessssnss</Text>
            <Button title="Users" onPress={() => navigation.navigate('Users')} />
        </View>
    );
}


export default HomeScreen;