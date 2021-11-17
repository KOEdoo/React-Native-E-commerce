import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import routes from '../navigation/routes';
import WelcomeScreen from './WelcomeScreen';

// const menuItems = [
//     {
//       title: "Cart",
//       icon: {
//         name: "cart",
//         backgroundColor: colors.primary,
//       },
//       targetScreen: "Cart",
//     },
//   ];
  
  function AccountScreen({ navigation }) {
    return (
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title="Kofi"
            subTitle="edookofi@gmail.com"
            image={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.container}>
          {/* <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => navigation.navigate(item.targetScreen)}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          /> */}
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={() => navigation.reset({index: 0, routes:[{name:routes.LOGOUT}]})}
        />
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: colors.light,
    },
    container: {
      marginVertical: 20,
    },
  });
  
  export default AccountScreen;