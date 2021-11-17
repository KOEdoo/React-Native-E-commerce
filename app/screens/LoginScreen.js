import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton'
import AppPicker from '../components/AppPicker';
import routes from '../navigation/routes';

function LoginScreen({ navigation}) {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo.png")}/>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            textContentType="emailAddress" />
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            textContentType="password" />
            <AppButton title="Login" onPress={() => navigation.reset({index: 0, routes:[{name:routes.LISTINGS}]})} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;