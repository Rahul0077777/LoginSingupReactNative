import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../src/screens/SignUpscreen';
import LoginScreen from '../src/screens/Loginscreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Create Account' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome Back' }} />
      </Stack.Navigator>
   
  );
};

export default App;



