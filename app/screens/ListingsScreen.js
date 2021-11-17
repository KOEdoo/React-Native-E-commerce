import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import { items } from '../../Data';


function ListingsScreen({ navigation }) {
    return (
       <Screen style={styles.screen}>
           <FlatList 
            data={items}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item })=>
                <Card 
                title={item.title}
                subTitle={"£" + item.price}
                image={item.image}
                onPress={ () => navigation.navigate(routes.LISTING_DETAILS, item) }
                />
            } 
           />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;