import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from './AppText'

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    subTitle: {
        color: colors.money,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    }
})

export default Card;