import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App_Login from './App_Login'
import AppStart from './App_Start'

const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
      }
    }>
      <Stack.Screen name="AppLogin" component={App_Login} />
      <Stack.Screen name='AppStart' component={AppStart}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;
