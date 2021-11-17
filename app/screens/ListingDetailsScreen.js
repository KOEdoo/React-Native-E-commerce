import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>£{listing.price}</AppText>
                <View style={styles.userContainer}>
                </View>             
                <AppButton  title="Add to Cart" color="secondary" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.money,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;