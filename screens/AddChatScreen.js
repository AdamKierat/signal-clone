import React, { useLayoutEffect, useState } from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase'

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");

    const createChat = async () => {
        if (input.length > 3) {
            await db.collection('chats').add({
                chatName: input,
            }).then(() => {
                navigation.goBack();
            }).catch(error => alert(error))
        } else {
            Alert.alert("Please correct yours input!", "Chat name must be longer than 3")
        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, [navigation])


    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter Chat Room Name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                LeftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
            />

            <Button onPress={createChat} title="Create new Chat" />

        </View>
    )
}
export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    }
})
