import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} options={{headerLeft: () => null}} />
    </Stack.Navigator> 
);

export default AccountNavigator;