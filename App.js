import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/Users/UsersScreen';
import UserDetail from './src/screens/Users/UserDetail';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Users' screenOptions={{headerStyle : {backgroundColor : "#f4511e"}}} >
        <Stack.Screen name="Home" component={HomeScreen}  options={ {title : "Anasayfa"}} />
        <Stack.Screen name="Users" component={UsersScreen}   />
        <Stack.Screen name="UserDetail" component={UserDetail} options= { ({route}) => ({title : route.params.name}) }  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;