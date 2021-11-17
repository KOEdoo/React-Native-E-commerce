import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import CartScreen from '../screens/CartScreen';
import CartButton from './CartButton';
import AuthNavigator from './AuthNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />}}/>
        <Tab.Screen name="Cart" component={CartScreen} options={({navigation}) => ({ tabBarButton: () => <CartButton onPress={() => navigation.navigate("Cart") }/>, tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cart" color={color} size={size} />})}/>
        <Tab.Screen name="Account" component={AccountNavigator} options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />}}/>
    </Tab.Navigator>
)

export default AppNavigator;