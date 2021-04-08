import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert((errorw)))

    }


    return (
        <SafeAreaView behavior='padding' style={styles.container}>

            <StatusBar style="light"></StatusBar>
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }}
                style={{ width: 175, height: 175, }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Emial"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login"></Button>
            <Button onPress={() => navigation.navigate('Register')}
                containerStyle={styles.button}
                type="outline"
                title="Register" />

            <View style={{ height: 50 }}></View>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#fff",

    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },

})
