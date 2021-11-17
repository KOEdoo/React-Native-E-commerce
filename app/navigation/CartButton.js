import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';

function CartButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="cart" color={colors.white} size={30} />
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        bottom: 20,
        borderColor: colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        borderRadius: 40,
    }
});

export default CartButton;