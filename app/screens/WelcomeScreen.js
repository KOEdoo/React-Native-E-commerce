import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background1.jpg")}
        >   
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.tagline}> We Got Your TVs</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
            <AppButton title="Register" color = "secondary" onPress={() => navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer:{        
        position: 'absolute',
        top: 70,
        alignItems: "center",
    },
    logo:{
        width: 100,
        height: 100,
    },
    tagline:{
        color: colors.alt,
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10,
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
})

export default WelcomeScreen;